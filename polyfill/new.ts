function newSolution(constructor: Function, ...args: any): Object {
    const obj = Object.create(constructor.prototype);
    constructor.apply(obj, [...args]);
    return obj;
}

const Parent = function (name: string, age: number): void {
    this.name = name;
    this.age = age;
}

const child = new Parent('jack', 18);
const child2 = newSolution(Parent, 'jack', 18);

// @ts-ignore
console.log(child, child2, child.__proto__ === Parent.prototype, child2.__proto__ === Parent.prototype);
