function A() {
    this.a = 1;
    return {
        a: 2
    }
}

A.prototype.a = 3;
const a = new A();

console.log(a.a);
console.log(a.constructor);
console.log(a.__proto__);
