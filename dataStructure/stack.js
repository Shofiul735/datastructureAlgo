/*
* Runtime:
* push->O(1)
* pop->O(1)
*/

class Node{
    constructor(val){
        this.value = val;
        this.prev = null;
    }
}

class Stack{
    #tail;
    constructor(){
        this.#tail = null;
        this.length = 0;
    }
   
    
    push(val){
        let node = new Node(val);
        if(this.length === 0){
            this.#tail = node;
        }else{
            node.prev = this.#tail;
            this.#tail = node;
        }
        this.length++;
        return true;
    }

    
}