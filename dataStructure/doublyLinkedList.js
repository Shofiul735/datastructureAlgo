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
        let val = this.tail.value;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return val;

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
        this.length--;
        return node.value;
    }

}
const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
let val = list.length;
while(val){
    console.log(list.shift());
    val--;
}
console.log(list.shift()); // false