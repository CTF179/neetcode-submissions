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
            if (prev.has(complement)) {
                return [i, prev.get(complement)];
            }
            prev.set(nums[i], i);
        }
        return [];
    }
}
