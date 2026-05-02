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
    clone(node, visited) {
        if (node === null) return node;

        if (visited.has(node)) {
            return visited.get(node);
        }

        const copy = new Node(node.val);
        visited.set(node, copy);
        for (const neighbor of node.neighbors) {
            copy.neighbors.push(this.clone(neighbor, visited))
        }
        return copy;
    }
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const visited = new Map();
        return this.clone(node, visited);
    }
}
