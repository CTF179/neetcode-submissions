/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return node;

        const visited = new Map();
        function travel(node) {
            if (!node) { return; }

            // start clone
            const currentNode = new Node(node.val);
            for (const nd of node.neighbors) {
                if (visited.has(nd.val)) {
                    // we still add cloned neighbors, but don't travel
                    currentNode.neighbors.push(visited.get(nd.val));
                    continue;
                }
                visited.set(node.val, currentNode);
                const dupNode = travel(nd, visited);
                if (!dupNode) return undefined;
                currentNode.neighbors.push(dupNode);
            }
            return currentNode;
        }
        const clone = travel(node, visited);
        return clone;
    }
}
