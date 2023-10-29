const express = require("express")
const { graphqlHTTP } = require("express-graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLFloat, GraphQLInt } = require("graphql");

const { productsData, userData } = require('./mock');

const RatingType = new GraphQLObjectType({
    name: 'Rating',
    description: 'This is the Rating object',
    fields: {
        rate: { type: GraphQLFloat },
        count: { type: GraphQLInt },
    }
});

const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: 'This is the Product Object',
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        price: { type: GraphQLFloat },
        description: { type: GraphQLString },
        category: { type: GraphQLString },
        image: { type: GraphQLString },
        rating: { type: RatingType },
    }
});

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This is the User Object',
    fields: {
        username: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        cart: { type: GraphQLList(GraphQLInt) },
        orders: { type: GraphQLList(GraphQLInt) },
        totalValue: { type: GraphQLFloat },
        totalCount: { type: GraphQLInt },

        // full name, custom property and add a resolver 
        fullName: {
            type: GraphQLString,
            resolve: ({ firstName, lastName }) => `${firstName} ${lastName}`
        },
        cartItems: {
            type: GraphQLList(ProductType),
            resolve: ({ cart }) => cart.map(id => productsData.find(product => product.id === id))
        }
    }
});

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'This is Query Object',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'Hello World!!!'
        },
        products: {
            type: GraphQLList(ProductType),
            resolve: () => productsData,
        },
        users: {
            type: GraphQLList(UserType),
            resolve: () => userData
        },
        user: {
            type: UserType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (_, args) => userData.find(user => user.username === args.username)
        },
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'This is Mutation Object',
    fields: {
        signup: {
            type: UserType,
            description: 'Create a new User account',
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                firstName: { type: GraphQLNonNull(GraphQLString) },
                lastName: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const { username, firstName, lastName } = args;
                const newUser = {
                    firstName, lastName, username,
                    cart: [], orders: [], totalCount: 0, totalValue: 0
                };
                // insert new user in db
                userData.push(newUser);
                return newUser;
            }
        },

        addToCart: {
            type: UserType,
            description: 'Add a product to cart',
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                username: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const { id, username } = args;
                const user = userData.find(u => u.username === username);
                user.cart.push(id);
                return user;
            }
        },
        removeFromCart: {
            type: UserType,
            description: 'remove a product from cart',
            args: {
                id: { type: GraphQLNonNull(GraphQLInt) },
                username: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const { id, username } = args;
                const user = userData.find(u => u.username === username);
                user.cart = user.cart.filter(productId => productId !== id)
                return user;
            }
        },

    }
});

const schema = new GraphQLSchema({
    query,
    mutation
})

const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
)
app.listen(5000)
console.log("Running a GraphQL API server at http://localhost:5000/graphql")