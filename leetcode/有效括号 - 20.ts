/*
* 题目：有效括号
* 思路：栈
* */
function isValid(s: string): boolean {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (cur === '(' || cur === '{' || cur === '[') {
            stack.push(cur);
        } else {
            const pop = stack.pop();
            if (cur === ')' && pop !== '(') {
                return false;
            }
            if (cur === '}' && pop !== '{') {
                return false;
            }
            if (cur === ']' && pop !== '[') {
                return false;
            }
        }
    }

    return !stack.length;
};

console.log(isValid('(]'));
