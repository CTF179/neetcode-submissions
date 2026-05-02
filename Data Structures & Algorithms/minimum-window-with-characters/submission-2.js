class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!t.length) return "";

        const countT = new Map()
        for (const c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }
        console.log("T", countT)

        let ans = [-1, -1];
        let ansLen = Infinity;

        for (let i = 0; i < s.length; i++) {
            const countSS = {};

            for (let j = i; j < s.length; j++) {
                countSS[s[j]] = (countSS[s[j]] || 0) + 1;

                let flag = true;
                for (let c in countT) { // ...iterator
                    if ((countSS[c] || 0) < countT[c]) {
                        flag = false;
                        break;
                    }
                }

                if (flag) {
                    console.log(`updating ans: "${s.slice(i, j + 1)}", len:${j - i + 1}`) // ...off by one
                    const len = j - i + 1;
                    if (len < ansLen) {
                        ansLen = len;
                        ans = [i, j];
                    }
                }
            }
        }
        if (ansLen === Infinity) {
            return "";
        }
        return s.slice(ans[0], ans[1] + 1);

    }
}