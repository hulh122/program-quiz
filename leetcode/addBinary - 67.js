function addBinary(a, b) {
    let num = 0;
    const length = a.length > b.length ? a.length : b.length;
    let res = '';
    let i = 0;
    while (i < length) {
        const sum = +(a[a.length - 1 - i] || 0) + +(b[b.length - 1 - i] || 0) + num;
        num = Math.floor(sum / 2);
        res = sum % 2 + res;
        i ++;
    }
    if (num) {
        res = num.toString(2) + res;
    }
    return res;
};

console.log(addBinary('1010', '1011'))
