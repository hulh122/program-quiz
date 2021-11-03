let a = 0;
let b = 0;
let A = (a) => {
    A = function (b) {
        console.log(a + b ++);
    }
    console.log(a++);
}

A(1);
A(2);
