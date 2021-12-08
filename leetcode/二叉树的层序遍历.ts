// 队列
import { TreeNode } from '../data/BST';

/*
* 题目：二叉树的层序遍历
* 思路：广度优先：队列
* */
function bfs(node: TreeNode): number[] {
    const res = [];
    const queue = [node];

    while (queue.length) {
        const cur = queue.shift();
        res.push(cur.val);
        if (cur.left) {
            queue.push(cur.left);
        }
        if (cur.right) {
            queue.push(cur.right);
        }
    }

    return res;
}

const node = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))

console.log(bfs(node));
