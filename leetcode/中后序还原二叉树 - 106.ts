/*
* 题目：中后序还原二叉树
* 思路：后续遍历的根节点在最后，在中序遍历中左子树在节点左边，右子树在节点右边
* */
import { TreeNode } from '../data/BST';

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    let tag = postorder.length - 1;
    const fn = function (start: number, end: number): TreeNode | null {
        if (start > end) {
            return null;
        }
        let node: TreeNode = new TreeNode(postorder[tag]);
        tag --;
        const index = inorder.indexOf(node.val);
        node.right = fn(index + 1, end);
        node.left = fn(start, index - 1);
        return node;
    }
    return fn(0, postorder.length - 1);
};

const inorder = [2, 5, 4, 6, 1, 7, 3, 8];
const postorder = [5, 6, 4, 2, 7, 8, 3, 1];

console.log(buildTree(inorder, postorder));
