/*
* 题目：股票周期预约 -> 寻找数组中正向差值最大的值
* 思路：动态规划
* */
function maxProfit(prices: number[]): number {
    if (prices.length < 2) {
        return 0;
    }

    let max = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min);
        min = Math.min(min, prices[i]);
    }

    return max;
};

console.log(maxProfit([3, 2, 1]))
