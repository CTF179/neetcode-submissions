class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 
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
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) { return 0; }

        let result = 1;
        const window = new Map();

        let j = 0;
        for (let i = 0; i < s.length; i++) {
            window[s[i]] = (window[s[i]] || 0) + 1;
            while (window[s[i]] > 1) {
                window[s[j]]--;
                if (window[s[j]] === 0) {
                    window.delete(s[j]);
                }
                j++;
            }
            result = Math.max(result, i - j + 1);
        }
        return result;
    }
}
