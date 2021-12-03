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
    // shift -> removes item in the front
    shift(){
        if(this.head === null){
            return null;
        }
        const val = this.head.val;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return val;
        }
        
        this.head = this.head.next;
        this.length--;
        return val; 
    }

    // unshift -> unshift adds item in the beginning of the list
    unshift(val){
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            let current = this.head;
            this.head = node;
            this.head.next = current;
        }
        this.length++;
    }

    // get-> it retruns n'th item
    getValue(index){
        if(index<this.length && index>=0){
            let current = this.head;
            while(index){
               current = current.next;
               index--; 
            }
            return current.val;
        }else{
            return undefined;
        }
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
list.unshift(-5);
list.unshift(-4);
list.unshift(-3);
list.unshift(-2);
list.unshift(-1);
console.log(list.get(5)) //return 1
let len = list.length;
while(len--){
    console.log(list.shift());
}