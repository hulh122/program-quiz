// 排序思路：向前比对，找到前小后大的数插入
// 时间复杂度：n^2

function insertSort(list: number[]): number[] {
    for (let i = 1; i < list.length; i ++) {
        const current = list[i];
        let preIndex = i - 1;
        while (preIndex >= 0 && list[preIndex] > current) {
            list[preIndex + 1] = list[preIndex];
            preIndex --;
        }
        list[preIndex + 1] = current;
    }
    return list;
}

console.log(insertSort([5, 6, 3, 2, 1, 7, 4]))

