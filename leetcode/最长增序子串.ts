/*
* 返回给定字符传中最长连续递增数字子序
* */

function solution(str: string): string {
    let cur = '';
    let max = '';

    for (let i = 0; i < str.length; i ++) {
        const curStr = str[i];
        const lastStr = str[i - 1];
        if (!isNaN(+curStr) && ((!isNaN(+lastStr) && curStr > lastStr) || i === 0)) {
            cur = cur + curStr;
            max = max.length <= cur.length ? cur : max;
        } else if (!isNaN(+curStr)) {
            cur = curStr;
        }
    }

    return max;
}

console.log(solution('12234abc56712'));
