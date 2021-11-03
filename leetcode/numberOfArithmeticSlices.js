function numberOfArithmeticSlices(nums) {
    let res = 0;
    let index = 0;
    let oldIndex = 0;
    let slice;
    while (nums[index + 1] !== undefined) {
        slice = nums[index] - nums[index + 1];
        while (nums[index + 1] !== undefined && (nums[index] - nums[index + 1] === slice)) {
            index ++;
        }
        if (index - oldIndex > 1) {
            res = res + (index - oldIndex) * (index - oldIndex -1 ) / 2;
        } else {
            index = oldIndex + 1;
        }
        oldIndex = index;
    }
    return res;
};
