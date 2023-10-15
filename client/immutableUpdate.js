const state = {
    "username": "nikhil",
    "name": "Nikhil",
    "cart": [
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            },
            "quantity": 1
        }
    ],
    "totalValue": 55.99,
    "orders": [],
    isLogged:false,
}


// const copyState = {...state}
// copyState.isLogged = true
const copyState = {...state, isLogged:true}
console.log(state);
console.log(copyState);