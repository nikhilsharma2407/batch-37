// const input = document.getElementById('name');
// const btn = document.getElementById('btn');


// btn.addEventListener("click", () => {
//     const name = input.value;
//     alert(`Hello ${name}`);
// });


// const onchange = (e) => console.log('onchange', e.target.value)
// const onfocus = () => console.log('onfocus')
// const onblur = () => console.log('onblur')
// const onkeydown = (e) => {
//     console.log('onkeydown', e.key)
//     if (isNaN(+e.key) ) {
//         e.preventDefault();
//     }
// }
// input.addEventListener("change", onchange)
// input.addEventListener("focus", onfocus)
// input.addEventListener("blur", onblur)
// input.addEventListener("keydown", onkeydown)


// console.log('start')
// console.log('a')
const promise = Promise.resolve("promise");
setTimeout(() => {
    console.log('timeout 0')
}, 0);
fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    response.json().then(humanReadableData=>{
        console.log(humanReadableData);
    })
});
console.log('first');
console.log('second')
promise.then(success=>console.log(success));
console.log('third')
// console.log(promise);


// const power = new Promise(res=>{
//     res(2);
// })
// power.then(val=>val).then(val=>val*2).then(val=>val*2)
// .then(final=>console.log(final));

// // exception handling
// // async await


