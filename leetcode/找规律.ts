function solution(n: number): number {
    const res = [];
    const towSum = [1];
    const threeSum = [1];
    while (res.length <= n) {
        let key;
        if (towSum[0] > threeSum[0]) {
            key = threeSum.shift();
        } else if (threeSum[0] > towSum[0]) {
            key = towSum.shift();
        } else {
            key = towSum.shift();
            threeSum.shift();
        }
        towSum.push(key * 2 + 1);
        threeSum.push(key * 3 + 1);
        res.push(key);
    }
    return res[n];
}

console.log(solution(100));
