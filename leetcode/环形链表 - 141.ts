function hasCycle(head: ListNode | null): boolean {
    let head1 = head;
    let head2 = head;
    let res = false;

    while (head1 && head2) {
        head1 = head1?.next?.next;
        head2 = head2?.next;
        if (head1 && head2 && head1 === head2) {
            res = true;
            break;
        }
    }

    return res;
};
