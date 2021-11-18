// O(n) 空间复杂度的去重
const uniq1 = <T>(arr: T[]): T[] => {
    console.time('uniq1');
    const res = [];
    arr.forEach((item) => {
        if (!res.includes(item)) {
            res.push(item);
        }
    })
    console.timeEnd('uniq1');
    return res;
}

// O(n) 时间复杂度
const uniq2 = (arr: any[]): any[] => {
    console.time('uniq2');
    const res = [];
    const flagArr = [];
    let index = 0;
    arr.forEach((item) => {
        if (!flagArr[item]) {
            res[index] = item;
            flagArr[item] = 1;
            index++;
        }
    })
    console.timeEnd('uniq2');
    return res;
}

// 无额外空间消耗， o(n^2) 的时间复杂度
const uniq3 = (arr: any): any[] => {
    console.time('uniq3');
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    console.timeEnd('uniq3');
    return arr;
}

const uniq4 = (arr: any): number => {
    console.time('uniq4');
    let samelen = 0;
    for (let i = 0; i < arr.length - samelen; i++) {
        for (let j = i + 1; j < arr.length - samelen; j++) {
            if (arr[j] === arr[i]) {
                arr[j] = arr[j] + arr[arr.length - samelen - 1];
                arr[arr.length - samelen - 1] = arr[j] - arr[arr.length - samelen - 1];
                arr[j] = arr[j] - arr[arr.length - samelen - 1];
                samelen++;
                j--;
            }
        }
    }
    console.timeEnd('uniq4');
    return arr.length - samelen;
}

const arr = [1, 3, 1, 'a', 'a', 'b', 4];

console.log(uniq1([...arr]));
console.log(uniq2([...arr]));
console.log(uniq3([...arr]));
console.log(uniq4([...arr]));


