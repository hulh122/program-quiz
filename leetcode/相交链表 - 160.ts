class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/*
* 题目：链表相交
* 思路：两链表相交，走两链表交点前的节点数之和一定相等
* */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let res = null;

    if (!headA || !headB) {
        return res;
    }

    let nodeA = headA;
    let nodeB = headB;

    while (nodeA !== nodeB) {
        nodeA = nodeA ? nodeA.next : headB;
        nodeB = nodeB ? nodeB.next : headA;
    }

    return nodeA;
};

const node = new ListNode(1);

const listA = new ListNode(2, node);
const listB = new ListNode(3, node);

console.log(getIntersectionNode(listA, listB));
