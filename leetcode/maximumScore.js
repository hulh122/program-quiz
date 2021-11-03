function maximumScore(nums, multipliers) {
    return dfs(0, nums.length - 1, 0, multipliers, nums);
}

function dfs(left, right, index, multipliers, nums) {
    if (index === multipliers.length) {
        return 0;
    }
    const multiplier = multipliers[index];
    index++;
    return Math.max(nums[left] * multiplier + dfs(left + 1, right, index, multipliers, nums), nums[right] * multiplier + dfs(left, right - 1, index, multipliers, nums));
}

console.log(maximumScore([1, 2, 3], [3, 2, 1]));
