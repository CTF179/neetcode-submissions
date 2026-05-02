class Solution {
    lengthOfLongestSubstring(s) {
        const window = new Map();
        let result = 0;

        let j = 0;
        for (let i = 0; i < s.length; i++) {
            if (window.has(s[i])) {
                j = Math.max(window.get(s[i])+1, j)
            }
            window.set(s[i], i);
            result = Math.max(result, i - j + 1);
        }
        return result;
    }
}
