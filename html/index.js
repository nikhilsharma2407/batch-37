// const input = document.getElementById('name');
// const btn = document.getElementById('btn');


// btn.addEventListener("click", () => {
//     const name = input.value;
//     alert(`Hello ${name}`);
// });


// const onchange = (e) => console.log('onchange', e.target.value)
// const onfocus = () => console.log('onfocus')
// // const onblur = () => console.log('onblur')
// // const onkeydown = (e) => {
// //     console.log('onkeydown', e.key)
// //     if (isNaN(+e.key) ) {
// //         e.preventDefault();
// //     }
// // }
// // input.addEventListener("change", onchange)
// // input.addEventListener("focus", onfocus)
// // input.addEventListener("blur", onblur)
// // input.addEventListener("keydown", onkeydown)


// // console.log('start')
// // console.log('a')
// const promise = Promise.resolve("promise");
// setTimeout(() => {
//     console.log('timeout 0')
// }, 0);
// fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
//     response.json().then(humanReadableData=>{
//         console.log(humanReadableData);
//     })
// });
// console.log('first');
// console.log('second')
// promise.then(success=>console.log(success));
// console.log('third')
// // console.log(promise);


// const power = new Promise(res=>{
//     res(2);
// })
// power.then(val=>val).then(val=>val*2).then(val=>val*2)
// .then(final=>console.log(final));

// // exception handling
// // async await

// access a non- existing variable -> Ref err
// invoke a function- which is not a fuctions - 

// try {
//     console.log(nonExisting);
//     // const nonFn = "fn";
//     // console.log(nonFn());
//     // let obj;
//     // console.log(obj.name);
// } catch (error) {
//     console.log('handled');
//     console.log(error.message);
// }
// console.log("abcd");


// // const promiseResolve = Promise.resolve("promise");
// const promiseReject = Promise.reject("err rejected");

// // promise.then(_=>console.log(_)).catch(err=>console.log('handled .catch callback',err));


// const getData = async () => {
//     // same as below
//     // promise.then(data=>console.log(data))
//     const data = await promiseResolve;
//     console.log(data);
// }
// getData();

// promiseReject.catch(error => console.log(error));
// const handlePromiseRejection = async()=>{
//     try {
//         const data = await promiseReject;
//             console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// handlePromiseRejection();

// fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
//     response.json().then(humanReadableData=>{
//         console.log(humanReadableData);
//     })
// });
// const fetchData = async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
//     const humanReadableData = await response.json();
//     console.log({humanReadableData});
// }
// fetchData();



// IIFE - Immediately Invoked Function Expression
// (async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
//     const humanReadableData = await response.json();
//     console.log({humanReadableData});
// })();


class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    greet() {
        console.log(this);
        // console.log(`Hello ${this.name}`)
    }
};

class Manager extends Employee {
    constructor(name,id,dept){
        super(name,id);
        this.id = id;
        this.name = `Manager ${name}`;
        this.dept = dept;
    }
}

const emp1 = new Employee('test', 101);
const emp2 = new Employee('abcd', 100);
const manager = new Manager('xyz',201,'Engg.')
emp1.greet()
manager.greet()
