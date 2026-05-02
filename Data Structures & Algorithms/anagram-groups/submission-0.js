class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        for (const str of strs) {
            const key = [...str].sort().join("");
            if (groups[key] === undefined) {
                groups[key] = [];
            }
            groups[key].push(str);
        }

        const answer = [];
        for (const group of Object.values(groups)) {
            answer.push(group);
        }

        return answer;
    }
}
