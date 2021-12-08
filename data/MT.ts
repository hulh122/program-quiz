export class MtTreeNode {
    val: number;
    children: MtTreeNode[];

    constructor(val: number, children?: MtTreeNode[]) {
        this.val = val;
        this.children = children;
    }
}
