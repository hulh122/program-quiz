function topKSolver(list: number[], k: number): number[] {
    console.time('time');

    const heapList = list.slice(0, k);
    const pendingList = list.slice(k);

    const heap = new Heap(heapList);

    pendingList.forEach(value => {
        heap.push(value);
    })

    console.timeEnd('time');

    return heap.list;
}

class Heap {
    public list: number[];

    constructor(list: number[]) {
        this.list = list;
        let startIndex = this.findParentIndex(this.list.length - 1);
        while (startIndex >= 0) {
            this.adjustDown(startIndex);
            startIndex--;
        }
    }

    private adjustDown(index: number): void {
        const curValue = this.list[index];
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        const leftChildValue = this.list[leftChildIndex];
        const rightChildValue = this.list[rightChildIndex];

        // 无子节点
        if (leftChildIndex > this.list.length - 1) {
            return;
        } else if (rightChildIndex > this.list.length - 1) {
            // 无右节点
            if (curValue > leftChildValue) {
                this.list[index] = leftChildValue;
                this.list[leftChildIndex] = curValue;
            }
            return;
        } else {
            // 同时有左右节点
            if (curValue > leftChildValue || curValue > rightChildValue) {
                if (leftChildValue > rightChildValue) {
                    this.list[index] = rightChildValue;
                    this.list[rightChildIndex] = curValue;
                    this.adjustDown(rightChildIndex);
                } else {
                    this.list[index] = leftChildValue;
                    this.list[leftChildIndex] = curValue;
                    this.adjustDown(leftChildIndex);
                }
            }
            return;
        }

    }

    private findParentIndex(index: number): number {
        if (index === 0) {
            return 0;
        }
        return Math.floor((index - 1) / 2);
    }

    public push(value: number): void {
        if (value > this.list[0]) {
            this.list[0] = value;
            this.adjustDown(0);
        }
    }
}

const list = [7,6,5,4,3,2,1]
const k = 5;

console.log(topKSolver(list, k));
