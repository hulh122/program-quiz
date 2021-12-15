/*
* 题目：长度最小的子数组
* 思路：
* */
function minSubArrayLen(target: number, nums: number[]): number {
    let min = 0;
    let start = 0;
    let cur = 0;

    for (let i = 0; i < nums.length; i++) {
        cur += nums[i];
        while (cur >= target) {
            min = min === 0 ? i - start + 1 : Math.min(min, i - start + 1);
            cur -= nums[start];
            start++;
        }
    }

    return min;
};

console.log(minSubArrayLen(8, [1, 2, 3, 7]))
