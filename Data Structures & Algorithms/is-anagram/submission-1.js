/*
ds: aaccerr
dt: aaccerr

a:2 
c:2
e:1
r:2
*/
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false;
        }

        const sMap = new Map();
        const tMap = new Map();

        const l = s.length;
        for (let i = 0; i < l; i++) {
            if (!sMap[s[i]]) {
                sMap[s[i]] = 0;
            }
            if (!tMap[t[i]]) {
                tMap[t[i]] = 0;
            }
            sMap[s[i]]++;
            tMap[t[i]]++;
        }

        if (sMap.length != tMap.length) {
            return false;
        }

        console.log("sMap:", sMap)
        console.log("tMap:", tMap)

        for (const [key, value] of Object.entries(sMap)) {
            console.log(`key: ${key}; value: ${value}`)
            if (!tMap[key]) return false;
            if (tMap[key] != value) return false;
        }


        return true;
    }
}
