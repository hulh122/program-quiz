/*
* 题目：螺旋矩阵
* */
function spiralOrder(matrix: number[][]): number[] {
    const h = matrix.length;
    const w = matrix[0].length;

    let hTop = 0;
    let hDown = 0;
    let wLeft = 0;
    let wRight = 0;
    const res = [];

    while (res.length <= h * w) {
        // 向右
        for (let i = wLeft; i < w - wRight; i++) {
            res.push(matrix[hTop][i]);
        }
        if (res.length >= h * w) {
            break;
        }
        hTop++;
        // 向下
        for (let i = hTop; i < h - hDown; i++) {
            res.push(matrix[i][w - wRight - 1]);
        }
        if (res.length >= h * w) {
            break;
        }
        wRight++;
        // 向左
        for (let i = w - wRight - 1; i >= wLeft; i--) {
            res.push(matrix[h - hDown - 1][i]);
        }
        if (res.length >= h * w) {
            break;
        }
        hDown++;
        // 向上
        for (let i = h - hDown - 1; i >= hTop; i--) {
            res.push(matrix[i][wLeft]);
        }
        if (res.length >= h * w) {
            break;
        }
        wLeft++;
    }
    return res;
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
