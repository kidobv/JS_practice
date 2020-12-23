function findClosestValueInBst(tree, target) {
    let closestTreeValue = tree.value;
    let rootDiff = Math.abs(tree.value - target);
    if (!tree.right && !tree.left) {
        return closestTreeValue;
    }
    if (closestTreeValue < target) {
        if (tree.right) {
            let nodeValue = findClosestValueInBst(tree.right, target);
            let nodeDiff = Math.abs(nodeValue - target);
            if (nodeDiff < rootDiff)
                closestTreeValue = nodeValue;
        }
    }
    else {//check left
        if (tree.left) {
            let nodeValue = findClosestValueInBst(tree.left, target);
            let nodeDiff = Math.abs(nodeValue - target);
            if (nodeDiff < rootDiff)
                closestTreeValue = nodeValue;
        }
    }
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
