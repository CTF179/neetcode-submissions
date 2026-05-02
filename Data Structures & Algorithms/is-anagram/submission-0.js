class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const ds = Array.from(s).sort().join("");
        const dt =Array.from(t).sort().join('');
        console.log("ds: ",ds);
        console.log("dt ",dt);
        return dt === ds;
    }
}
