/*
* 题目：字符串相加
* 思路：大数加法，进位
* */
function addStrings(num1: string, num2: string): string {
    let i = 1;
    let res = '';
    let gap = 0;
    const len1 = num1.length;
    const len2 = num2.length;

    while (len1 - i >= 0 || len2 - i >= 0) {
        let cur = +(num1[len1 - i] ?? 0) + +(num2[len2 - i] ?? 0) + gap;
        res = cur % 10 + res;
        gap = (cur - cur % 10) / 10;
        i++;
    }

    if (gap) {
        res = gap + res;
    }

    return res;
};

console.log(addStrings('999', '1'));
