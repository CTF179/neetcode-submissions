class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        /* 
        How do you know we're at the answer?
        if mid - 1 is larger; this is the answer
        How do we know to go left? 
           since we know we're going to the minimum
           if the first thing is larger than the middle we go left
           because that means the pivot is between the mid and first
           [8,9,1,2,3,4,5,6,7]
           [9,1,2,3,4,5,6,7,8]
   
        How do we know to go right? 
           since we know we're going to the minimum
           if the first index is less than the mid then we go right 
           because that's the only what we can go lower
           [3,4,5,6,7,8,9,1,2]
           [4,5,6,7,8,9,1,2,3]
   
           [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
           [20,21,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
           [12,13,14,15,16,17,18,19,20,21,1,2,3,4,5,6,7,8,9,10,11]
       
           edge cases:
           sorted? Meaning that first index is less than last index
           n-1? last index is less than n-2;
        */
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        if (nums[0] < nums[nums.length - 1]) return nums[0];
        if (nums[nums.length - 1] < nums[nums.length - 2]) return nums[nums.length - 1];

        let left = 0, right = nums.length;
        while (left < right) {
            const mid = Math.ceil((right + left) / 2);
            console.log("Mid: ", nums[mid]);
            if (nums[mid] < nums[mid - 1]) return nums[mid];
            if (nums[0] > nums[mid]) {
                // go left when first num is larger
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return nums[left];
    }
}
