/*
    Queue Runtime:
        1.enqueue -> O(1)
        2.dequeue -> O(1)
*/


class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    #head;
    #tail;
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.length = 0;
    }
    enqueue(val){
        let node = new Node(val);
        if(this.length === 0){
            this.#head = node;
            this.#tail = node;
        }else{
            this.#tail.next = node;
            this.#tail = node;
        }
        this.length++;
        return true;
    }
    dequeue(){
        if(this.length === 0) return undefined;
        let node = this.#head;
        if(this.length === 1){
            this.#head = null;   
        }else{
            this.#head = node.next;
            node.next = null;
        }
        this.length--;
        return node.value;
    }
}
