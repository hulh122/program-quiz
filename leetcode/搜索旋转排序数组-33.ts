/*
* 题目：搜索旋转排序数组
* 思路：只需判断是否处于旋转序列，每个点都会有确定递增的方向，然后决定 low high 二分加减即可
* */

function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const index = Math.floor((low + high) / 2);
        if (target === nums[index]) {
            return index;
        }

        if (nums[index] >= nums[0]) {
            // 处于递增序列
            if (nums[0] <= target && target < nums[index]) {
                high = index - 1;
            } else {
                low = index + 1;
            }
        } else {
            // 处于旋转序列
            if (nums[nums.length - 1] >= target && nums[index] < target) {
                low = index + 1;
            } else {
                high = index - 1;
            }
        }
    }
    return -1;
};

console.log(search([3, 4, 5, 6, 1, 2], 2))
