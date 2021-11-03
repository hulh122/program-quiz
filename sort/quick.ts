// 排序思路：分治根据基准元素，把大于基准的放右边，小于基准的放左边，递归
// 时间复杂度 n^2 / nlogn

function quickSort(list: number[], left: number = 0, right: number = list.length - 1): number[] {
    let partitionIndex;

    if (left < right) {
        partitionIndex = partition(list, left, right);
        quickSort(list, left, partitionIndex - 1);
        quickSort(list, partitionIndex + 1, right);
    }
    return list;
}

// 根据基准，比基准小放左边，比基准大放右边，返回基准索引
function partition(list: number[], left: number, right: number): number {
    const pivot = left;
    let index = pivot + 1;
    // 聪明的做法 无额外空间开销做出排序操作
    for (let i = index; i <= right; i++) {
        if (list[i] < list[pivot]) {
            swap(list, i, index);
            index++;
        }
    }
    swap(list, pivot, index - 1);
    return index - 1;
}

function swap(list: number[], i: number, j: number): void {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

console.log(quickSort([5, 6, 3, 2, 1, 7, 4]))

