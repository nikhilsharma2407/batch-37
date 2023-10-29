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
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString },
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
        name: { type: GraphQLString },
        cart: { type: GraphQLList(GraphQLString) },
        orders: { type: GraphQLList(GraphQLString) },
        totalValue: { type: GraphQLFloat },
        totalCount: { type: GraphQLInt },
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
        // user: {
        //     type: UserType,
        //     args: {
        //         username: { type: GraphQLNonNull(GraphQLString) }
        //     },
        //     resolve: (_, args) => userData.find(user => user.username === args.username)
        // }
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
                name: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const { username, name } = args;
                const newUser = { username, name, cart: [], orders: [] };
                userData.push(newUser);
                return newUser;
            },
        },

        addToCart: {
            type: UserType,
            description: 'Add a Product to cart',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const { id } = args;
                const user = userData.find(({ username }) => username === args.username);
                user.cart.push(id);
                return user;
            }
        },
        removeFromCart: {
            type: UserType,
            description: 'Remove a Product from cart',
            args: {
                id: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, args) => {
                const user = userData.find(({ username }) => username === args.username);
                user.cart = user.cart.filter(id => id !== args.id);
                return user;
            }
        }
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