/*
* 题目：三数之和
* 思路：先排序，在固定一个值，头尾双指针运算
* */
function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];

    const sortedNums = nums.sort((a, b) => a - b);

    // 第一位大于 0 最后一位小于 0 直接返回
    if (sortedNums[0] > 0 || sortedNums[sortedNums.length] < 0) {
        return res;
    }

    for (let i = 0; i < sortedNums.length - 2; i++) {
        // 如果当前的数和前一个数相等，说明是重复数，直接忽略
        if (i !== 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue;
        } else if (sortedNums[i] > 0) {
            // 如果第一个数大于 0，说明后续相加不可能为 0，直接跳出循环
            break;
        } else {
            // 后两位数相加等于 num 即可
            const num = 0 - sortedNums[i];
            let left = i + 1;
            let right = sortedNums.length - 1;

            while (left < right) {
                if (sortedNums[left] + sortedNums[right] === num) {
                    // 相加等于 0，推入结果数组
                    res.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left++;
                    right--;
                    // 重复数过滤
                    while (sortedNums[left] === sortedNums[left - 1]) {
                        left++;
                    }
                    while (sortedNums[right] === sortedNums[right + 1]) {
                        right--;
                    }
                } else if (sortedNums[left] + sortedNums[right] < num) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
