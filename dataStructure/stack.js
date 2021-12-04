class Node{
    constructor(val){
        this.value = val;
        this.prev = null;
    }
}

class Stack{
    constructor(){
        this.tail = null;
        this.length = 0;
    }
   
    
    push(val){
        let node = new Node(val);
        if(this.length === 0){
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return true;
    }

    pop(){
        let node = this.tail;
        if(this.length === 1){
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            node.prev = null;
        }
        this.length--;
        return node.value;
    }


}