/*
* 题目：二叉树路径总和
* 思路：深度优先
* */
import { TreeNode } from '../data/BST';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }
    const dfs = (node: TreeNode | null, cur?: number) => {
        cur = cur ? cur + node.val : node.val;
        if ((!node.right && !node.left)) {
            return cur === targetSum;
        } else if (node.left && node.right) {
            return dfs(node.left, cur) || dfs(node.right, cur);
        } else if (node.left) {
            return dfs(node.left, cur);
        } else {
            return dfs(node.right, cur);
        }
    }
    return dfs(root);
};

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(hasPathSum(root, 3));
