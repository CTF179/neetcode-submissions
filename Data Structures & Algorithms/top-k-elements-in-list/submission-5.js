class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        console.log(`count: ${JSON.stringify(count)}`)

        const freq = Array.from({ length: nums.length + 1 }, () => [])
        for (const n in count) {
            freq[count[n]].push(parseInt(n))
        }
        console.log(`freq: ${JSON.stringify(freq)}`)

        const answer = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                answer.push(n);
                if (answer.length === k) {
                    return answer;
                }
            }
        }
    }
}
