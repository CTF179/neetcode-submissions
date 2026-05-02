class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     * 
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
     */
    productExceptSelf(nums) {
        const ding = Array.from({ length: nums.length }, () => 1)
        let carry = nums[0];
        let backfill = nums[nums.length - 1];

        let start = 1;
        let end = nums.length - 2;

        while (start < nums.length && end >= 0) {
            ding[start] *= carry;
            ding[end] *= backfill;

            carry *= nums[start]
            backfill *= nums[end];

            start++;
            end--;
        }
        console.log("ding:", ding)

        return ding;
    }
}
