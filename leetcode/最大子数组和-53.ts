/*
* 题目：最大子数组和
* */

function maxSubArray(nums: number[]): number {
    let max = nums[0];
    let cur = nums[0];

    for (let i = 1; i < nums.length; i++) {
        cur = cur > 0 ? nums[i] + cur : nums[i];
        max = Math.max(max, cur);
    }

    return max;
};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
