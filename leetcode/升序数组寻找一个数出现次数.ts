function solution(nums: number[], k: number): number {
    let left = 0;
    let right = nums.length;
    let findLeft = false;
    let findRight = false;

    while (left < right && (!findLeft || !findRight) && (k >= nums[left] || k <= nums[right])) {
        if (!findLeft) {
            if (nums[left] === k) {
                findLeft = true;
            } else {
                left++;
            }
        }

        if (!findRight) {
            if (nums[right] === k) {
                findRight = true
            } else {
                right--;
            }
        }
    }

    if (findLeft && findRight) {
        return right - left + 1;
    } else if (findLeft || findRight) {
        return 1;
    } else {
        return 0;
    }
}

console.log(solution([1, 2, 3, 4, 4, 4, 4, 5], 4));
