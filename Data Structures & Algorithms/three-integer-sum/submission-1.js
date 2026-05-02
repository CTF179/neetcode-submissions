class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
        // nums[i] + nums[j] + nums[k] === 0
        // nums[i] + nums[j] = - nums[k] 
        // nums[i] = - nums[j] - nums[k] 
     */
    threeSum(nums) {
        const answer = {};

        for (let i = 0; i < nums.length - 1; i++) {
            const target = nums[i] * -1
            const mp = {}

            // two sum
            for (let j = i + 1; j < nums.length; j++) {
                const complement = target - nums[j];
                if (mp[complement] !== undefined) {
                    const mset = [nums[i], nums[j], nums[mp[complement]]].sort();
                    answer[JSON.stringify(mset)] = mset;
                }
                mp[nums[j]] = j;
            }
        }
        return Object.values(answer);
    }
}
