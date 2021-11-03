// 排序思路：每次遍历选取出最大的值排在最后
// 时间复杂度 n^2 / n

function bubbleSort(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                const temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}

console.log(bubbleSort([5, 6, 3, 2, 1, 7, 4]))
