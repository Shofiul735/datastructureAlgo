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

    pop(){
        if(this.length === 0 ) return undefined;
        let node = this.#tail;
        this.#tail = this.#tail.prev;
        node.prev = null;
        this.length--;
        return node.value;
    }

    
}

let stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(3);
stack.push(-2);
stack.push(19);
stack.push(1);
stack.push(0);
stack.tail;
let len = stack.length;
while(len--){
    console.log(stack.pop());
}