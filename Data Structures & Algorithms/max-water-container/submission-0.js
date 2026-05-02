class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     * 
     * 
     */
    maxArea(heights) {
        let answer = 0;

        let j = heights.length - 1;
        let i = 0;
        while (i <= j) {
            const distance = j - i;
            const area = distance * Math.min(heights[i], heights[j]);
            answer = Math.max(answer, area);

            // always move the smaller height
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return answer;
    }
}
