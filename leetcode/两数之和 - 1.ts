/*
* 题目：两数之和
* 题解：map 存旧数据和索引
* */
function twoSum(nums: number[], target: number): number[] {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] !== undefined) {
            return [obj[target - nums[i]], i];
        } else {
            obj[nums[i]] = i;
        }
    }
};

console.log(twoSum([1, 2, 3, 5], 5))
