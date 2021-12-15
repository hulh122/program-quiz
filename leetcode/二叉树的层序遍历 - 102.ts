/*
* 题目：二叉树的层序遍历
* 思路：队列
* */
import { TreeNode } from '../data/BST';

function levelOrder(root: TreeNode | null): number[][] {
    const res = [];
    const queue = [root];
    while (queue.length) {
        let len = queue.length;
        const arr = [];
        while (len) {
            const cur = queue.shift();
            if (cur) {
                arr.push(cur.val);
                cur.left && queue.push(cur.left);
                cur.right && queue.push(cur.right);
            }
            len--;
        }
        arr.length && res.push(arr);
    }
    return res;
};
