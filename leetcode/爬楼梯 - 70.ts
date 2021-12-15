/*
* 题目：爬楼梯
* 思路：动态规划超时，转移成滚动赋值
* */
function climbStairs(n: number): number {
    let i = 0;
    let j = 0;
    let k = 1;
    for (let m = 1; m <= n; m ++) {
        i = j;
        j = k;
        k = i + j;
    }
    return k;
};

console.log(climbStairs(1));
