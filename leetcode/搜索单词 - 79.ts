/*
* 题目：搜索单词
* 题解：深搜 + 回溯
* */
function exist(board: string[][], word: string): boolean {
    let res = false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
                searchWord(i, j, 0)
                if (res) {
                    return res;
                }
            }
        }
    }

    function searchWord(i: number, j: number, index: number): boolean {
        if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== word[index]) {
            return;
        }

        // 搜索完毕
        if (index === word.length - 1) {
            res = true;
            return;
        }
        const str = board[i][j];
        board[i][j] = undefined;
        searchWord(i + 1, j, index + 1);
        searchWord(i - 1, j, index + 1);
        searchWord(i, j + 1, index + 1);
        searchWord(i, j - 1, index + 1);
        board[i][j] = str;
    }

    return res;
};

console.log(exist([
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'E', 'S'],
    ['A', 'D', 'E', 'E']
], 'ABCESEEEFS'));
