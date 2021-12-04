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
    constructor(){
        this.#head = null;
        this.length = 0;
    }
    enqueue(val){
        let node = new Node(val);
        if(this.length === 0){
            this.#head = node;
        }else{
            this.#head.next = node;
            this.#head = node;
        }
        this.length++;
        return true;
    }
}