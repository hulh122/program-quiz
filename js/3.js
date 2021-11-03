setTimeout(() => {
    console.log(1);
}, 200);
console.log(2);
const promise = new Promise((res) => {
    console.log(3);
    setTimeout(() => {
        console.log(4);
    }, 100);
    res();
})
promise.then(() => {
    console.log(5);
})
console.log(6);
