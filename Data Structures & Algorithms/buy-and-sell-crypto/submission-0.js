class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                const diff = prices[j] - prices[i];
                console.log(`Diff: ${diff}; \t`+
                `i: ${i}; `+
                `j: ${j}; \t`+
                `Prices[i]: ${prices[i]}; `+
                `Prices[j]: ${prices[j]}`)
                maxProfit = Math.max(maxProfit, diff);
            }
        }
        return maxProfit;
    }
}
