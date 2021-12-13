import { TreeNode } from '../data/BST';

/*
* 题目：前中序还原二叉树
* 思路：由前序出发，前序中的节点在中序遍历中前面的位置为左子树，右边的为右子树
* */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let tag = 0;
    const fn = function (start: number, end: number): TreeNode {
        if (start > end) {
            // 如果已经找完了，便结束
            return null;
        }

        let node: TreeNode | null = null;
        for (let i = start; i <= end; i++) {
            // 中序相等时为前子树
            if (preorder[tag] === inorder[i]) {
                node = new TreeNode(preorder[tag]);
                tag++;
                node.left = fn(start, i - 1);
                node.right = fn(i + 1, end);
                break;
            }
        }
        return node;
    }
    return fn(0, preorder.length - 1);
};

const preorder = [1, 2, 4, 5, 6, 3, 7, 8];
const inorder = [2, 5, 4, 6, 1, 7, 3, 8];

console.log(buildTree(preorder, inorder));
