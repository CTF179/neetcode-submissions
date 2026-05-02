class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const ding = Array.from({ length: nums.length }, () => [])
        const carry = [nums[0]];
        for (let curr = 1; curr < nums.length; curr++) {
            ding[curr].push(...carry);
            carry.push(nums[curr]);
        }

        const back = [nums[nums.length - 1]];
        for (let curr = nums.length - 2; curr >= 0; curr--) {
            ding[curr].push(...back);
            back.push(nums[curr]);
        }

        return ding.map(group => group.reduce((acc, value) => acc * value, 1))
    }
}
