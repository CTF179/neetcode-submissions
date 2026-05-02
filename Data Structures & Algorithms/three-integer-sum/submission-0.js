class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
        // nums[i] + nums[j] + nums[k] === 0
        // nums[i] + nums[j] = -nums[k] 
     */
    threeSum(nums) {
        const answer = {};



        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        answer[(JSON.stringify([nums[i], nums[j], nums[k]].sort()))] = [nums[i], nums[j], nums[k]]
                    }
                }
            }
        }
        return Object.values(answer);
    }
}
