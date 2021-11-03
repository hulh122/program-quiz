// 单向循环
function maxOperations(nums, k) {
    let res = 0;
    let map = {};
    nums.forEach((num) => {
        const target = k - num;
        if (!map[num]) {
            map[target] = map[target] ? map[target] + 1 : 1;
        } else {
            res++;
            map[num] = map[num] - 1;
        }
    })
    return res;
};

// 双指针
function maxOperations2(nums, k) {
    let res = 0;
    let i = 0;
    let j = nums.length - 1;
    const sortRes = nums.sort((a, b) => a - b)
    while (i < j) {
        if (sortRes[i] + sortRes[j] > k) {
            j--
        } else if (sortRes[i] + sortRes[j] < k) {
            i++
        } else {
            i++
            j--
            res++
        }
    }
    return res;
}

console.log(maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3));
console.log(maxOperations2([1,2,3,4], 5));
