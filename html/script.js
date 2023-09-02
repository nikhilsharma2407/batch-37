
// var,  hoisting 


// Data types
// Primites
// Number
// // String
// // Boolean
// // undefined
// // NaN
// // Date

// // Object
// // Arrays
// // null


// let num = 1234.123;
// console.log(Math.floor(num));

// let str = "Hello World!!!";
// console.log(str.substring(0,5)); 
// console.log(str.substring(6)); 
// let name = 'nikhil';


// // name = name[0].toUpperCase()+name.substring(1)
// console.log(name);
// // console.log(str.split(' '))
// console.log(str+num);
const AMOUNT = 1000000;

// console.log(AMOUNT.toLocaleString('en-us'));

// // Template Strings

console.log(`Your acc balance is ${1 * 100}`)

// true, false

// falsy values
// empty string - ''
// 0
// NaN
// undefined
// null


// truthy - other than falsy, except
// Empty Array - []
// Empty Object - {}


if ([]) {
    console.log('truthy');
} else {
    console.log('falsy');
}
// module.exports = {}

let loggedInUser = { name: '', username: '', loginTime: '' }
loggedInUser = null


let num = parseInt('1')
num = parseInt('abcd')
console.log(num);

// Operators
// ==, ===

1 == '1' //true check sonly value
1 === "1" // checks the type along with value

// || - logical OR, && logical AND

// arrays, objects, functions

function add(num1, num2) {
    return num1 + num2
}

// const addArrowFn = (num1,num2)=>{
//     return num1+num2
// }
const addArrowFn = (num1, num2) => ({ sum: num1 + num2 });

const wrapperFunction = (callbackFn, ...args) => {
    console.log(args);
    const output = callbackFn(...args)
    console.log(output)
}

wrapperFunction(addArrowFn, 1, 2, 3, 4)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArrr = [];
newArrr[5] = 6;
// console.log(newArrr);

// console.log(arr.at(-1));

// for (let i=0;i<arr.length; i++){
//     console.log(i);
// }




const traverseArray = (element, index) => {
    console.log(element, 'at', index);
}
arr.forEach(traverseArray);
arr.forEach((element, index) => {
    console.log(element, 'at', index);
});

const squaredNums = nums.map(el => el ** 2);
// console.log({nums},{squaredNums});

// map,filter,reduce

const odd = nums.filter(e => e % 2);

// const sum = nums.reduce((prev, current )=>{
//     console.log({prev},{current},{return:prev+current});
//     return prev+current
// });/

// const sum = nums.reduce((prev, current) => {
//     console.log({ prev }, { current }, { return: prev + current });
//     return { sum: prev.sum + current }
// }, { sum: 0 });
// console.log(sum);

// Objects - key value pairs,
const employee = {
    name: 'test',
    id: 101,
    dept: {
        deptName: 'Engg.'
    }
}

employee.email = 'abcd@gmail.com';
const dynamicKeyName = 'email';
console.log(employee[dynamicKeyName]);
console.clear();


Object.keys(employee).forEach(key => {
    console.log(key, employee[key]);
})

// console.log(Object.keys(employee))
// console.log(Object.values(employee))
// console.log(Object.entries(employee))

// spread operator - ...

// same works with object
const arr = [1, [1,2,{key:value}], 3];
const arr2 = arr;  //not acceptable, will mutate original array
// const arr2 = [...arr];  //not acceptable, will mutate original array
arr2[0] = 999;

console.log(arr);
console.log(arr2);

// shallow copy
const employee2 = { ...employee, dept: { ...employee.dept } };
employee2.name = 'new name'
employee2.dept.deptName = 'abcd'
console.log(employee);
console.log(employee2);