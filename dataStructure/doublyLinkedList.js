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

    unshift(value){
        let node = new Node(value);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            let nextNode = this.head;
            node.next = nextNode;
            node.prev = null;
            this.head = node;
        }
        this.length++;
        return true;
    }

    #getNode(index){
        let mid = Math.floor(this.length/2);
        let current;
        if(index<mid){
            current = this.head;
            while(index--){
                current = current.next;
            }
        }else{
            current = this.tail;
            index = this.length-index-1;
            while(index--){
                current = current.prev;
            }
        }
        return current;
    }

    #validIndex(index){
        if(index<0 || index >= this.length) return false;
        return true;
    }


    getValue(index){
        if(this.#validIndex(index)){
            let node = this.#getNode(index);
            return node.value;
        }
        return false;    
    }


    setValue(index,value){
        if(this.#validIndex(index)){
            let node = this.#getNode(index);
            node.value = value;
            return true;
        }
        return false;
    }

}
const list = new DoublyLinkedList();
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
list.setValue(7,768);
console.log(list.getValue(7)); //768