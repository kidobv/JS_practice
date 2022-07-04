class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class linkedList{
	constructor(){
		this.head = null;
	}

	addStart(value){
		const node = new Node(value);
		node.next = this.head;
		this.head = node;
	}
	addEnd(value){
		const node = new Node(value);
		let curr = this.head;
		//no head node
		if(curr == null){
		   this.head = node
		   return
		}

		while (curr.next != null){
			curr = curr.next
		}

		curr.next = node;
	}
}