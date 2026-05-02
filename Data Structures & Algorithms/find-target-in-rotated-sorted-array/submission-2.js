class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // Lefts find the pivot using the lower bound;
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        let smallest = l;
        l = 0;
        r = nums.length - 1;

        // pick a side
        if (target >= nums[smallest] && target <= nums[r]) {
            l = smallest;
        } else {
            r = smallest - 1;
        }

        //  we can bs to the answer;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] === target) {
                return m;
            }
            if (nums[m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return -1;
    }
}
