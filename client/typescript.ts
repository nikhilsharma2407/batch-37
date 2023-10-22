let accountBalance: number = 100;

const input = '100';

accountBalance += parseInt(input);

console.log(accountBalance);

let name = "Nikhil";

let someUnknownValue: any;

someUnknownValue = [1, 2, 3];
someUnknownValue = null;
someUnknownValue = false

console.log(name);

let id: number | string;
id = 123;
id = "id-101";

// Array, Objects

const arr: number[] | string[] = [1, 2, 3, "abcd"];



// function 
// args, optional, return

// const arrowFn = (arg1:type1, arg2:type2, .... ):returnType =>{

// }
// if fn is not returning anything, make return type as void

const sum = (num1: number, num2: number, num3?: number): number => {
    if (num3) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}

sum(1, 2)
sum(1, 2, 3);

sum();
sum(1)
sum(, 1)
sum(false, [1])

function fun1(num1: number, num2: number): number {
    return num1 + num2
}



const fun = (num1: number, name: string): number => {
    return name + num1;
}


fun("abcd", 1);



// enum string constants
enum ACTIONS {
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    RESET_PASSWORD = 'RESET_PASSWORD',
    LOGOUT = 'LOGOUT',
}



// interface
// user defined data type

interface IRating {
    rate: number,
    count: number
}

interface IProduct {
    readonly id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating,
    quantity?: number,
};


const product1: IProduct = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}

export { };