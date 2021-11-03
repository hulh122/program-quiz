// 排序思路：每次选取最小的值和自己交换位置
// 时间复杂度：n^2

function selectSort(list: number[]): number[] {
    let changeIndex;
    for (let i = 0; i < list.length - 1; i ++) {
        let min = list[i];
        changeIndex = i;
        for (let j = i + 1; j < list.length; j ++) {
           if (list[j] < min) {
               changeIndex = j;
               min = list[j];
           }
        }
        if (i !== changeIndex) {
            list[changeIndex] = list[i];
            list[i] = min;
        }
    }
    return list;
}

console.log(selectSort([5, 6, 3, 2, 1, 7, 4]))

