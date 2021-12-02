// 如何让 a == 1 && a == 2 && a == 3 返回 true
const a = {
    i: 1,
    valueOf: function () {
        return this.i++
    }
}

const b = new Proxy({}, {
    i: 1,
    get: function () {
        return () => this.i++
    }
})

const c = [1, 2, 3]; // Array.prototype.toString 方法实际是调用 join 方法
c.join = c.shift;

console.log(a == 1 && a == 2 && a == 3);
console.log(b == 1 && b == 2 && b == 3);
console.log(c == 1 && c == 2 && c == 3);


