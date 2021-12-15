/*
* 题目：链表中倒数第 k 个节点
* 思路：双指针
* */
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let head1 = head;
    let head2 = null;
    let i = 1;
    while (head1 !== null) {
        if (i >= k) {
            head2 = head2 ? head2.next : head;
        }
        head1 = head1.next;
        i++;
    }
    return head2;
};
