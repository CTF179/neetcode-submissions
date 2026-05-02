class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] === chains[i][k] + 1) {
                    chains[i].push(nums[j]);
                    console.log(`Added nums[${j}]:${nums[j]} to the chain[${i}]:${chains[i]}`)
                    j = 0;
                    k += 1;
                }
            }
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const existingNums = new Set(nums);
        let max = 1;

        for (let i = 0; i < nums.length; i++) {
            let combo = 1;
            if (!existingNums.has(nums[i] - 1)) {
                while (existingNums.has(nums[i] + combo)) {
                    combo++;
                    max = Math.max(max, combo);
                }
            }
        }
        // console.log(`cache: ${JSON.stringify(cache)}`)
        console.log(`existingNums: ${JSON.stringify(existingNums)}`)

        return max;
    }
}
