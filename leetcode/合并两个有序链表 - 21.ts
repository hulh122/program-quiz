import { ListNode } from '../data/link';

/*
* 题目：合并两个有序链表
* 思路：递归 / 比较法
* */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let res = new ListNode();
    let cur = res;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }

    if (!list1) {
        cur.next = list2;
    } else {
        cur.next = list1;
    }

    return res.next;
};

const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

console.log(mergeTwoLists(list1, list2));

