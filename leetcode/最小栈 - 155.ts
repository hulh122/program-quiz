class DbLinkedNode {
    constructor(val: number, pre?: DbLinkedNode, next?: DbLinkedNode) {
        this.val = val;
        this.pre = pre;
        this.next = next;
    }

    public val: number;

    public pre: DbLinkedNode;

    public next: DbLinkedNode;
}

class MinStack {
    public arr = [];

    public head = new DbLinkedNode(null);

    public tail = new DbLinkedNode(null);

    constructor() {
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    push(val: number): void {
        const node = new DbLinkedNode(val);
        this.arr.push(node);
        if (this.getMin() === null || val < this.getMin()) {
            this.move2Head(node);
        } else {
            this.move2Tail(node);
        }
    }

    public pop(): void {
        const node = this.arr.pop();
        if (node) {
            this.deleteNode(node);
        }
    }

    public top(): number {
        return this.arr[0]?.val;
    }

    public getMin(): number {
        return this.head.next.val;
    }

    private move2Head(node: DbLinkedNode): void {
        const head = this.head.next;
        node.next = head;
        head.pre = node;
        this.head.next = node;
        node.pre = this.head;
    }

    private move2Tail(node: DbLinkedNode): void {
        const pre = this.tail.pre;
        pre.next = node;
        node.pre = pre;
        node.next = this.tail;
        this.tail.pre = node;
    }

    private deleteNode(node: DbLinkedNode): void {
        const pre = node.pre;
        pre.next = node.next;
        node.next.pre = pre;
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
