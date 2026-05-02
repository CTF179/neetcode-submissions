class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prev = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            console.log(`looking for: ${complement} in ${JSON.stringify(prev)}`)
            console.log(`Search ${prev[complement]}`)
            if (prev[complement] != undefined) {
                return [i, prev[complement]];
            }
            prev[nums[i]] = i;
        }
        return [];
    }
}
