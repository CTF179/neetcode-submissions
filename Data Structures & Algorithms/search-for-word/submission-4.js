/*
backtrack(state, choices, res){
    if (isSolution(state)){
        markResult(state, res)
        return;
    }
    for(let choice of choices){
        if (isValid(choice)) {
            makeChoice(state, choice)
            backtrack(state, choices, res)
            undoChoice(state, choice)
        }
    }
}
*/


class Solution {
    backtrack(target, x, y, board, step) {
        if (target.length - step === 0) {
            return true;
        }
        // Check every direction, inside the bounds
        const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        for (const [dx, dy] of direction) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX < 0 || newY < 0 || newX >= board.length || newY >= board[0].length) {
                // out of bounds
                continue;
            }
            if (board[newX][newY] === target[step]) {
                const letter = board[newX][newY];
                board[newX][newY] = '.';
                if (this.backtrack(target, newX, newY, board, step + 1)) {
                    return true;
                }
                board[newX][newY] = letter;
            }
        }
    }
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let step = 0;
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                if (board[row][col] === word[0]) {
                    // potench solution; attempt path
                    const letter = board[row][col];
                    board[row][col] = '.';
                    if (this.backtrack(word, row, col, board, step + 1)) {
                        return true;
                    };
                    board[row][col] = letter;
                }
            }
        }
        return false;
    }
}
