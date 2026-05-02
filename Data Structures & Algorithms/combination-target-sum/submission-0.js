// backtrack(state, choices, res) {
//     if (isSolution(state)) {
//         recordSolution(state, res)
//         return;
//     }
//     for (let choice of choices) {
//         if (isValid(choice)) {
//             makeChoice(state, choice);
//             this.backtrack(state, choices, res);
//             undoChoice(state, choice)
//         }
//     }
// }
class Solution {
    backtrack(target, currPath, choices, res) {
        const curSum = currPath.reduce((acc, n) => acc + n, 0)
        if (target === curSum) {
            const id = JSON.stringify(currPath.sort());
            res.set(id, currPath);
            return
        }
        if (curSum > target) return
        for (let choice of choices) {
            const newPath = [...currPath, choice];
            this.backtrack(target, newPath, choices, res);
        }
    }

    combinationSum(nums, target) {
        const map = new Map()
        this.backtrack(target, [], nums, map);
        return Array.from(map.values());
    }
}
