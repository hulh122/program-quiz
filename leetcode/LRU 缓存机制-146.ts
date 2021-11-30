class DbLinkedListNode {
    constructor(key?: number, value?: number) {
        this.key = key;
        this.value = value;
    }

    public key: number;
    public value: number;
    public pre: DbLinkedListNode;
    public next: DbLinkedListNode;
}

/*
* 实现一个 LRU 缓存构造类，时间复杂度为 O(1)
* 思路：双向链表 + hashMap
* */
class LRUCache {
    public maxSize: number;

    public size: number;

    public cache: Map<number, DbLinkedListNode>;

    public head: DbLinkedListNode;

    public tail: DbLinkedListNode;

    constructor(capacity: number) {
        this.maxSize = capacity;
        this.size = 0;
        this.cache = new Map<number, DbLinkedListNode>();
        this.head = new DbLinkedListNode();
        this.tail = new DbLinkedListNode();
        // 构造虚拟的头尾，避免判断前后节点是否存在
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    public get(key: number): number {
        const node = this.cache.get(key);
        if (node) {
            this.moveToHead(node);
            return node.value;
        }
        return -1;
    }

    public put(key: number, value: number): void {
        const node = this.cache.get(key);
        // 如果节点存在，更新节点值，并放到链表头
        if (node) {
            node.value = value;
            this.moveToHead(node);
        } else {
            // 如果节点不存在，创造新节点，放到链表头，如果超过最大容量，删除链表尾
            const newNode = new DbLinkedListNode(key, value);
            this.cache.set(key, newNode);
            this.resetHead(newNode);
            this.size += 1;
            if (this.size > this.maxSize) {
                this.deleteTail();
                this.size -= 1;
            }
        }
    }

    private moveToHead(node: DbLinkedListNode): void {
        // 断开节点连接
        this.removeNode(node);
        // 重置链表头
        this.resetHead(node);
    }

    private resetHead(node: DbLinkedListNode): void {
        this.head.next.pre = node;
        node.next = this.head.next;
        node.pre = this.head;
        this.head.next = node;
    }

    private removeNode(node: DbLinkedListNode): void {
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }

    private deleteTail(): void {
        const deleteNode = this.tail.pre;
        this.removeNode(deleteNode);
        this.cache.delete(deleteNode.key);
    }
}

const LRU = new LRUCache(2);
console.log(LRU.get(1));
LRU.put(1, 1);
console.log(LRU.get(1));
