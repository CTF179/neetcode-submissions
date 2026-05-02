class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const l = s.length;
        let result = 0;

        for (let i = 0; i < l; i++) {
            const set = new Set();
            set.add(s[i])
            for (let j = i + 1; j < l; j++) {
                if (set.has(s[j])) {
                    break;
                }
                set.add(s[j]);
            }
            result = Math.max(result, set.size)
        }
        return result;
    }
}
