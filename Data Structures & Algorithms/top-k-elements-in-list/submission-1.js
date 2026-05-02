class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /*
        1: 1
        2: 2
        3: 3

        What are the top K most frequent elements. 
        Push them into a frequency map, then get the top elements
        */
        const freq = {}

        for (const num of nums) {
            if (freq[num] == undefined) freq[num] = 0
            freq[num]++;
        }

        console.log(`freq: ${JSON.stringify(freq)}`)
        const answer = [];
        for (let i = 0; i < k; i++) {
            let max = 0;
            let top = 0;
            for (const [key, value] of Object.entries(freq)) {
                if (max < value) {
                    // console.log(`max < value: new max: ${}`)
                    top = key;
                    max = value;
                }
            }
            delete freq[top];
            answer.push(top);
        }
        return answer;
    }
}
