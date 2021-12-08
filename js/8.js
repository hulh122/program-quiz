const i = {
    [Symbol.toPrimitive]: () => {
        return 1;
    }
}

const date = new Date();

console.log(1 + i);
console.log(1 + date, date.valueOf());
