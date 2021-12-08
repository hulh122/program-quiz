/*
* 题目：给定一个多叉树，求出每层和
* */

import { MtTreeNode } from '../data/MT';

function solution(node: MtTreeNode): number[] {
    const res = [];
    const queue = [node];

    while (queue.length) {
        let len = queue.length;
        let val = 0;
        while (len) {
            const cur = queue.shift();
            val += cur.val;
            cur.children && queue.push(...cur.children);
            len--;
        }
        res.push(val);
    }

    return res;
}

const node = new MtTreeNode(1, [new MtTreeNode(2, [new MtTreeNode(4), new MtTreeNode(5)]), new MtTreeNode(3, [new MtTreeNode(4), new MtTreeNode(5)])]);

console.log(solution(node));
