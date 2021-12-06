/*
* 实现 sum(1)(2)(3) === 6
* */

function sum(num) {
    let res = num;

    const add = function (num) {
        res += num;
        return add;
    }

    add.toString = function () {
        return res;
    }

    return add;
}

console.log(sum(1)(2)(3)(4))
