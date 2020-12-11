var mergeTwoLists = function (l1, l2) {

    let dummyNode = new ListNode(-1)
    let head = dummyNode;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            dummyNode.next = l1
            l1 = l1.next
            console.log("dummy >> ", dummyNode)
            console.log("l1 >> ", l1)
        }
        else {
            dummyNode.next = l2
            l2 = l2.next
            console.log("dummy>> ", dummyNode)
            console.log("l2>> ", l2)
        }
        dummyNode = dummyNode.next
    }

    if (l1 !== null) {
        console.log("l1 >> ", l1)
        dummyNode.next = l1
    }
    else {
        console.log("l2>> ", l2)
        dummyNode.next = l2
    }

    console.log("final dummy>> ", dummyNode)
    console.log("final head>> ", head)
    return head.next
};

class ListNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}
