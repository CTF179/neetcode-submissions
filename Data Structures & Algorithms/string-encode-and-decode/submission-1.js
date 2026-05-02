class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
        if (strs.length === 0) {
            return "";
        }
     */
    encode(strs) {
        const ans = strs.join('\n');
        return strs.length+";" + ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const [num, dstr]= str.split(";");
        if (num==0){
            return [];
        }
        const ans = dstr.split("\n");
        console.log("decode:", ans)
        return ans;
    }
}
