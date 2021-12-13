import { TreeNode } from '../data/BST';

/*
* 二叉树的前序遍历
* 思路：根左右
*/
function preorder(node: TreeNode): number[] {
    const res = [];
    preorderBfs(node, res);
    return res;
}

function preorderBfs(node: TreeNode, res: number[]): void {
    if (!node) {
        return;
    }
    res.push(node.val);
    node.left && preorderBfs(node.left, res);
    node.right && preorderBfs(node.right, res);
}

/*
* 二叉树的中序遍历
* 思路：左根右
*/
function inorder(node: TreeNode): number[] {
    const res = [];
    inorderBfs(node, res);
    return res;
}

function inorderBfs(node: TreeNode, res: number[]): void {
    if (!node) {
        return;
    }
    node.left && inorderBfs(node.left, res);
    res.push(node.val);
    node.right && inorderBfs(node.right, res);
}

/*
* 二叉树的后序遍历
* 思路:左右根
*/
function postorder(node: TreeNode): number[] {
    const res = [];
    postorderBfs(node, res);
    return res;
}


function postorderBfs(node: TreeNode, res: number[]): void {
    if (!node) {
        return;
    }
    node.left && postorderBfs(node.left, res);
    node.right && postorderBfs(node.right, res);
    res.push(node.val);
}

/*
* 前序遍历的非递归实现
* 思路：栈
* */
function noRecursionPreorder(node: TreeNode): number[] {
    const stack = [node];
    const res = [];

    while (stack.length) {
        const cur = stack.pop();
        res.push(cur.val);
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }

    return res;
}

/*
* 中序遍历的非递归实现
* 思路：栈
* */
function noRecursionInorder(node: TreeNode): number[] {
    const res = [];
    const stack = [];

    let head = node;
    while (head || stack.length) {
        while (head) {
            stack.push(head);
            head = head.left;
        }
        if (stack.length) {
            const node = stack.pop();
            res.push(node.val);
            if (node.right) {
                head = node.right;
            }
        }
    }
    return res;
}

/*
* 后序遍历的非递归实现
* 思路：栈
* */
function noRecursionPostorder(node: TreeNode): number[] {
    const res = [];
    const stack = [];
    let head = node;
    const visitedMap = new Map<TreeNode, boolean>();

    while (head || stack.length) {
        while (head) {
            stack.push(head);
            head = head.left;
        }
        if (stack.length) {
            const node = stack[stack.length - 1];
            // 已访问过
            if (visitedMap.has(node)) {
                res.push(stack.pop().val);
            } else if (node.right) {
                head = node.right;
                visitedMap.set(node, true);
            } else {
                res.push(stack.pop().val);
            }
        }
    }

    return res;
}

const node = new TreeNode(1, new TreeNode(2, null, new TreeNode(4, new TreeNode(5), new TreeNode(6))), new TreeNode(3, new TreeNode(7), new TreeNode(8)))

console.log('---前序---');
console.log(preorder(node), noRecursionPreorder(node));
console.log('---中序---');
console.log(inorder(node), noRecursionInorder(node));
console.log('---后序---');
console.log(postorder(node), noRecursionPostorder(node));


