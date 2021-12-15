/*
* 题目：求根节点到叶节点数字之和
* 思路：深度优先
* */
import { TreeNode } from '../data/BST';

function sumNumbers(root: TreeNode | null): number {
    let res = 0;

    const dfs = (node: TreeNode, cur?: number) => {
        if (!node) {
            res += (cur ?? 0);
            return;
        }
        cur = cur ? +(cur.toString() + node.val.toString()) : node.val;
        if (node.left) {
            dfs(node.left, cur);
        }
        if (node.right) {
            dfs(node.right, cur);
        }
        if (!node.left && !node.right) {
            res += cur;
        }
    }

    dfs(root);

    return res;
};

const node = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sumNumbers(node));
