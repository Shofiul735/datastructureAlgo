/*
*   Node has a val and next pointer
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    pop(){
        if(this.head === null){
            return null;
        }
        let val = this.tail.val;
        if(this.head === this.tail ||this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return val;
        }
        let previous = this.head;
        let current = previous.next;
        while(current !== this.tail){
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        return val;
    }

}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
let len = list.length;
while(len--){
    console.log(list.pop());
}