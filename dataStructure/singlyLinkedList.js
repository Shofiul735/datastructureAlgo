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

    // sortedInsert-> This function will add item in sorted order

    sortedInsertion(value){
        let node = new Node(value)
        if(this.head === null && this.tail === null && this.length === 0){
            this.head = node;
            this.tail = node;
        }else if(this.head.val>value){
            this.unshift(value);
            return true;
        }else if(this.tail.val<value){
            this.push(value);
            return true;
        }else{
            let previous = this.head;
            let current = previous.next;
            while(current){
                if(current.val>=value){
                    break;
                }
                previous = current;
                current = current.next;
            }
            previous.next = node;
            node.next = current;
        }
        this.length++;
        return true;
    }

}
const list = new SinglyLinkedList();
list.sortedInsertion(10);
list.sortedInsertion(1);
list.sortedInsertion(5);
list.sortedInsertion(-10);
list.sortedInsertion(-3);
list.sortedInsertion(7);
list.sortedInsertion(9);
list.sortedInsertion(12);
list.traverse();
console.log("Length:",list.length);
list.reverse();
list.traverse();