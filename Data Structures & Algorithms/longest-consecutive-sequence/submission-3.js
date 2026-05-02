class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return 1;

        const unique = nums.filter((num, index) => nums.indexOf(num) === index)
        const sorted = unique.sort((a, b) => a - b);
        console.log("sorted: ", JSON.stringify(sorted))

        let longestChain = 1;
        let currChain = 1;
        for (let i = 1; i < sorted.length; i++) {
            currChain += 1;
            if (sorted[i - 1] + 1 == sorted[i]) {
                longestChain = Math.max(longestChain, currChain)
            } else {
                currChain = 1;
            }
        }

        return longestChain;
    }
}
