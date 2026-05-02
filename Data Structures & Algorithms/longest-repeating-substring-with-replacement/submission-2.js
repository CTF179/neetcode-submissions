class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     
     k = 1
     abbxyz
      
     {a:1, b:2, x:1}
     */
    characterReplacement(s, k) {
        const len = s.length;
        let max = 0, j = 0, maxAmp;
        const amp = new Map();

        for (let i = 0; i < len; i++) {
            amp[s[i]] = (amp[s[i]] || 0) + 1;
            console.log("1.", amp)
            maxAmp = Object.values(amp).reduce((a, v) => Math.max(a, v), 0);
            while ((i - j + 1) - maxAmp > k) {
                amp[s[j]] -= 1;
                if (amp[s[j]] <= 0) {
                    amp.delete(s[j])
                };
                j += 1;
            }
            console.log("2.", amp)
            console.log("maxAmp: ", maxAmp)
            console.log(`i-j+1: ${i - j + 1};`)
            console.log(`max: ${max};`)
            console.log(`-`)

            max = Math.max(max, i - j + 1);
        }
        return max;
    }
}
