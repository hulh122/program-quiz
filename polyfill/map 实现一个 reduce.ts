const reduce = <T>(array: any[], callBack: (pre: any, cur: any, index?: number, array?: any[]) => T, initVal: T): T => {
    let res = initVal;

    array.map((cur, index) => {
        res = callBack(res, cur, index, array);
    })

    return res;
}

console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
