class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const answer = [];
        const freq = {}

        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        const heap = new MinPriorityQueue((x) => x[1]);
        for (const [key, value] of Object.entries(freq)) {
            heap.enqueue([key, value]);
            if (heap.size() > k) heap.dequeue();
        }

        for (let i = 0; i < k; i++){
            const [key, value] = heap.dequeue();
            answer.push(key)
        }
        return answer;
    }
}
