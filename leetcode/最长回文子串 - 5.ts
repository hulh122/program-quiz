/*
* 题目：最长回文子串
* 思路：经典动态规划，以长度来枚举
* */

function longestPalindrome(s: string): string {
    const len = s.length;
    if (len < 2) {
        return s;
    }

    let max = s[0];
    const dp = [];


    // 扩展所有长度为 1 / 2 的 dp
    for (let i = 0; i < len; i++) {
        if (!dp[i]) {
            dp[i] = [];
        }
        dp[i][i] = 1;
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = 1;
            const str = s.substr(i, 2);
            max = str.length > max.length ? str : max;
        }
    }

    // 枚举长度大于 3 的方法
    for (let l = 3; l <= len; l++) {
        for (let i = 0; i < len - l + 1; i++) {
            const end = i + l - 1;
            if (s[i] === s[end] && dp[i + 1][end - 1] === 1) {
                dp[i][end] = 1;
                const str = s.substr(i, l);
                max = str.length > max.length ? str : max;
            }
        }
    }

    return max;
};

console.log(longestPalindrome('aacabdkacaa'));
