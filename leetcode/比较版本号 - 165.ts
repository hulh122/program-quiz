/*
* 题目：比较版本号
* 思路：指针前移
* */
function compareVersion(version1: string, version2: string): number {
    let res = 0;
    const version1List = version1.split('.').map((item) => +item);
    const version2List = version2.split('.').map((item) => +item);
    let i = 0;
    while (i < version1List.length || i < version2List.length) {
        const one = version1List[i] ?? 0;
        const tow = version2List[i] ?? 0;
        if (one > tow) {
            res = 1;
            break;
        } else if (one === tow) {
            i++;
            continue;
        } else {
            res = -1;
            break;
        }
    }
    return res;
};

console.log(compareVersion('1.0.03', '1.0.02'))
