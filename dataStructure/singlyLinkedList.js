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

    // prefix # means it's a private method

    #getNode(index){
        if(index<this.length && index>=0){
            let current = this.head;
            while(index){
               current = current.next;
               index--; 
            }
            return current;
        }else{
            return undefined;
        }
    }


    // get-> it retruns n'th item
    getValue(index){
        if(index<this.length && index>=0){
            return this.#getNode(index).val;
        }else{
            return undefined;
        }
    }

    /* setValue -> it overrides value of a node. it has two parameters at(location of the node) 
    * and value(that you want to place).function will return true if successful, otherwise false 
    */
    setValue(at,value){
        let targetNode = this.#getNode(at);
        if(targetNode){
            targetNode.val = value;
            return true;
        }
        return false; 
    }
    // insert "value" at given index
    insertValue(at,value){
        if(at<0 || at> this.length){
            return false;
        }else if(at === 0){
            this.unshift(value);
        }
        else if (at === this.length ){
            this.push(value)
        }else{
            let previousNode = this.#getNode(at-1);
            let nextNode = previousNode.next; // same as let nextNode = this.getNode(at);
            let newNode = new Node(value);
            newNode.next = nextNode;
            previousNode.next = newNode;
        }
        this.length++;
        return true;
    }
    remove(index){
        if(index<0 || index>=this.length) return false;
        if(index === 0){
            this.shift();
        }else if(index === this.length-1){
            this.pop();
        }else{
            let previous = this.#getNode(index-1);
            let current = previous.next;
            let nextNode = current.next;
            previous.next = nextNode;
        }
        this.length--;
        return true;
    }

    // This method will reverse the linked list
    reverse(){
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let prev = null;
        let nextNode;
        for(let i=0;i<this.length;i++){
            nextNode = currentNode.next;
            currentNode.next = prev;
            prev = currentNode
            currentNode = nextNode;
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
list.insertValue(11,1000);
list.insertValue(7,735);
list.remove(2);
console.log(list.insertValue(10000,735)); //will return false.
list.setValue(10,1); // it will palce 1 at 10
console.log(list.getValue(10)) //return 1
console.log(`Length: ${list.length}`);
let len = list.length;
while(len--){
    console.log(list.shift());
}

console.log("After reverse the linked List:");
list.reverse();
list.traverse();