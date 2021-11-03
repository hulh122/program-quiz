function concatenatedBinary(n) {
    let str = '';
    for (let i = 1; i <= n; i ++) {
        str += i.toString(2);
    }
    console.log((+(+str).toString(10)));
    return (+(+str).toString(10)) % 1000000007;
};

console.log(concatenatedBinary(12));
