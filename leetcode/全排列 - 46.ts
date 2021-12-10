/*
* 题目：全排列
* 思路：回溯
* */
function permute(nums: number[]): number[][] {
    const res = [];
    backtrack(res, [], nums);
    return res;
};

function backtrack(res: number[][], arr: number[], nums: number[]): void {
    if (arr.length === nums.length) {
        // 推入拷贝内容，因为是引用传递，回溯出口会变成空
        res.push([...arr]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
            backtrack(res, arr, nums);
            arr.pop();
        }
    }
}

console.log(permute([1, 2, 3]));
