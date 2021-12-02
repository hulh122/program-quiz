/*
* 不更换相对顺序将偶数排到最后
* */

function solution(nums: number[]): number[] {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            swap(i, index, nums);
            index++;
        }
    }
    return nums;
}

function swap(i: number, j: number, nums: number[]): void {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

console.log(solution([2, 3, 1, 4, 5, 8, 6, 10]))
