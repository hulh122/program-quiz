interface LinkListNode {
    cur: any;
    next: LinkListNode;
}

const reverseLinkedList = (node: LinkListNode): LinkListNode => {
    let pre = null;
    let cur = node;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
}

const linkList = {
    cur: 1,
    next: {
        cur: 2,
        next: {
            cur: 3,
            next: undefined
        }
    }
}
console.log(reverseLinkedList(linkList))
