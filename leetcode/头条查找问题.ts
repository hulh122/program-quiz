/*
* 题目描述：输入一个数组，返回出现评率最高且最先出现的字符
* 思路：倒序遍历，用数组存储中间数据，下标作为字符 ASCII 标识
* */

function findCode(arr: (number | string)[]): number | string {
    const ascArr = [];
    let res = arr[arr.length - 1];
    let maxCount = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        const asc = String(arr[i]).charCodeAt(0);
        ascArr[asc] = ascArr[asc] ? ascArr[asc] + 1 : 1;
        if (ascArr[asc] >= maxCount) {
            res = arr[i];
            maxCount = ascArr[asc];
        }
    }
    return res;
}

console.log(findCode(['a', 'c', 'b', 'b', 'd', 'c', 'c', 'd', 'd']))
