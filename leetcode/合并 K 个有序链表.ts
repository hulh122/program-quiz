/*
* 题目：合并 K 个有序链表
* 思路：分治，到递归根节点处合并两个链表 | 优先队列
* */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists?.length) {
        return null;
    }

    const priorityQueue = [...lists].filter(item => !!item).sort((a, b) => a.val - b.val);
    const res = new ListNode();
    let cur = res;

    while (priorityQueue.length) {
        const node = priorityQueue.shift();
        cur.next = node;
        if (node.next) {
            priorityQueue.push(node.next);
            priorityQueue.sort((a, b) => a.val - b.val);
        }
        cur = cur.next;
    }

    return res.next;
};
