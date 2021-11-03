function instanceofSolution(instance, construtor): boolean {
    // 边界判断
    if (construtor.__proto__ !== Function.prototype) {
        // 非构造器
        throw new Error('Right-hand side of \'instanceof\' is not callable')
    }

    let res = false;
    let nextProto = instance;
    while (nextProto !== Object.prototype) {
        res = nextProto.__proto__ === construtor.prototype;
        nextProto = nextProto.__proto__;
    }
    return res;
}

console.log(instanceofSolution(Function, Object));
