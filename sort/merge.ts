// 排序思路：分治自下而上递归
// 时间复杂度 nlog(n)
// 空间复杂度 n

function mergeSort(list: number[]): number[] {
    if (list.length < 2) {
        return list;
    }
    const mid = Math.floor(list.length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    return [...res, ...left, ...right];
}

console.log(mergeSort([5, 6, 3, 2, 1, 7, 4]))
