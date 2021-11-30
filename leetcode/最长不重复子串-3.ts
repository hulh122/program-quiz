/*
* 题目：计算最长不重复子串
* 思路：滑动窗口
* */
function lengthOfLongestSubstring(s: string): number {
    // 记录字符上一次出现的位置
    const last = Array(128).fill(-1);
    let res = 0;
    let start = 0; // 窗口开始的位置
    for (let i = 0; i < s.length; i ++) {
        const index = s.charCodeAt(i);
        start = Math.max(start, last[index] + 1);
        res = Math.max(res, i - start + 1);
        last[index] = i;
    }
    return res;
};

console.log(lengthOfLongestSubstring('abcadf'))
