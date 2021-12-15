/*
* 题目：岛屿的最大面积
* 思路：搜索
* */
function maxAreaOfIsland(grid: number[][]): number {
    let max = 0;

    const search = (i: number, j: number, cur: number): number => {
        if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[i].length - 1 || grid[i][j] !== 1) {
            return cur;
        }
        grid[i][j] = 0;
        cur += 1;
        cur = search(i - 1, j, cur);
        cur = search(i + 1, j, cur);
        cur = search(i, j + 1, cur);
        cur = search(i, j - 1, cur);
        return cur;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                const num = search(i, j, 0);
                max = Math.max(max, num);
            }
        }
    }

    return max;
};

console.log(maxAreaOfIsland([[1, 0], [1, 0]]));
