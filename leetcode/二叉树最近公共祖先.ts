class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/*
* 二叉树双节点的最近公共祖先
* 思路：
* 1. 公共祖先必然满足条件：若公共祖先不为两节点之一，一定在左子树和右子树存在两节点。若公共祖先为节点之一，在左子树或右子树存在其中一个节点。
* 2. 用 map 存上每个节点的父节点，再由两节点向上寻找，找到最近一个被访问过的节点即可
* */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let res = null;

    const dfs = (node: TreeNode, one: TreeNode, second: TreeNode) => {
        if (node === null) {
            return false;
        }

        // 当前节点是否在左子树和右子树存在节点 one 和 second
        const leftNode = dfs(node.left, one, second);
        const rightNode = dfs(node.right, one, second);

        if ((leftNode && rightNode) || ((node === one || node === second) && (leftNode || rightNode))) {
            res = node;
        }

        return leftNode || rightNode || (node === one || node === second);
    }

    dfs(root, p, q);

    return res;
};

function lowestCommonAncestor2(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // 存当前节点和父节点
    let map = new Map<TreeNode, TreeNode>();
    // 存访问值
    let visitedSet = new Set<TreeNode>();

    // 访问所有节点, 存其父节点
    const dfs = (node: TreeNode) => {
        if (!node) {
            return;
        }
        if (node.left) {
            map.set(node.left, node);
            dfs(node.left);
        }
        if (node.right) {
            map.set(node.right, node);
            dfs(node.right);
        }
    }

    dfs(root);

    // 从 p 开始访问其所有父节点
    let visitP = p;
    while (visitP) {
        visitedSet.add(visitP);
        visitP = map.get(visitP);
    }

    // 从 q 开始，如果访问到节点则返回
    let visionQ = q;
    while (visionQ) {
        if (visitedSet.has(visionQ)) {
            return visionQ;
        }
        visionQ = map.get(visionQ);
    }

    return null;
};
