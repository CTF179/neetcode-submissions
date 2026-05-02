class Solution {
    markIsland(grid, x, y) {
        const stack = [[x, y]];
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        while (stack.length > 0) {
            const node = stack.pop();
            for (const [dx, dy] of directions) {
                const ddx = node[0] + dx;
                const ddy = node[1] + dy;
                if (ddx >= grid.length || ddx < 0) continue;
                if (ddy >= grid[0].length || ddy < 0) continue;
                if (grid[ddx][ddy] === '0' || grid[ddx][ddy] === 'X') continue;

                grid[ddx][ddy] = 'X'
                stack.push([ddx, ddy]);
            }
        }
    }
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        /*
        global count of all the islands
        If the current node is a 0; Skip it.
        If we're on a 1, that's an island (+1), mark it as an X; 
            dfs: keep marking with an X until every step on the isalnd is water or is an X,
        Scan the entire 2D array until we're all X or 0

        edge case:
        literally the edges
        not marking the islands
        */
        let ans = 0;
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === '0' || grid[row][col] === 'X') continue;
                console.log(`fail: (${row}, ${col})`)
                grid[row][col] = 'X';
                this.markIsland(grid, row, col);
                ans += 1;
            }
        }
        return ans;
    }
}
