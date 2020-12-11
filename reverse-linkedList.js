var reverseList = function (head) {
    let dummyNode = new ListNode();

    while (head !== null) {
        let temp = head.next
        console.log("before >> ")
        console.log("dummy >> ", dummyNode)
        console.log("temp >> ", temp)
        console.log("head >> ", head)
        head.next = dummyNode.next
        console.log("head assign>> ", head)
        dummyNode.next = head
        head = temp
        console.log("after >> ")
        console.log("dummy >> ", dummyNode)
        console.log("temp >> ", temp)
        console.log("head >> ", head)

    }
    return dummyNode.next

};

class ListNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}
