class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /\W/g;
        const normalized = s.toLowerCase().replace(regex, '');
        console.log("normalized:", normalized)
        let left = 0;
        let right = normalized.length - 1;

        while (left < right) {
            if (normalized[left] != normalized[right]) {
                return false
            }
            left++;
            right--;
        }

        return true;
    }
}
