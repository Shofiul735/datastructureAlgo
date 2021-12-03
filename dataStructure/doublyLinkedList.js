class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return true;
    }
    pop(){
        if(this.length === 0) return false;
        let node = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        // set node.prev to null(node.next is already null) to get deleted by garbage collector
        node.prev = null;
        this.length--;
        return node.value;

    }
    shift(){
        if(this.length === 0) return false;
        let node = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            let next = node.next;
            next.prev = null;
            this.head = next;
        }
        // node next and prev set to null to get deleted (node) by garbage collector 
        node.next = null;
        node.prev = null;
        
        this.length--;
        return node.value;
    }

}
const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
let val = list.length;
while(val){
    console.log(list.shift());
    val--;
}
console.log(list.shift()); // false