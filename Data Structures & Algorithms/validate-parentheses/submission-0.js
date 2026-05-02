class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const open = ['(', '{', '[']
        const close = [')', '}', ']']

        for (const c of s) {
            let openI = open.indexOf(c);
            let closeI = close.indexOf(c);
            if (openI !== -1) {
                stack.push(openI);
            } else {
                if (stack[stack.length - 1] != closeI) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.length === 0;
    }
}
