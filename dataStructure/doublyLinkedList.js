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
        }else if(this.length === 1){
            node.prev = this.head;
            this.head.next = node;
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
        }else if(this.length === 1){
            this.tail.prev = node;
            node.next = this.head;
            node.prev = null;
            this.head = node;   
        }else{
            let nextNode = this.head;
            node.next = nextNode;
            node.prev = null;
            nextNode.prev = node;
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
            while(index){
                current = current.next;
                index--;
            }
        }else{
            current = this.tail;
            index = this.length-index-1;
            while(index){
                current = current.prev;
                index--;
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

    insertValue(index,value){
        if(this.#validIndex(index)){
            if(index === 0){
                this.unshift(value);
                this.length++;
                return true;
            }
            let prevNode = this.#getNode(index-1);
            let nextNode = prevNode.next;
            let node = new Node(value);
            node.prev = prevNode;
            node.next = nextNode;
            prevNode.next = node;
            nextNode.prev = node;
            this.length++;
            return true;
        }
        return false;
    }

    remove(index){
        if(this.#validIndex(index)){
            if(index === 0){
                this.shift();
                return true;
            }else if(index === this.length-1){
                this.pop();
                return true;
            }else{
                let node = this.#getNode(index);
                let previous = node.prev;
                let nextNode = node.next;
                previous.next = nextNode;
                nextNode.prev = previous;
                // To help garbage collector
                node.next = null;
                node.prev = null;
                this.length--;
                return true;
            }
        }
        return false;
    }


    sortedInsertion(value){
        if(this.length === 0){
            let node = new Node(value);
            this.head = node;
            this.tail = node;
        }else if(value<=this.head.value){
            this.unshift(value);
            return true;
        }else if(value>=this.tail.value){
            this.push(value);
            return true;
        }else{
            let node = new Node(value);
            let current = this.head.next;
            while(current){
                if(value<= current.value){
                    break;
                }
                current = current.next;
            }
            let prev = current.prev;
            node.next = current;
            node.prev = prev;
            current.prev = node;
            prev.next = node;

        }

        this.length++;
        return true;
    }

}
const list = new DoublyLinkedList();
list.sortedInsertion(1);
list.sortedInsertion(2);
list.sortedInsertion(3);
list.sortedInsertion(5);
list.sortedInsertion(7);
list.sortedInsertion(9);
list.sortedInsertion(4);
list.sortedInsertion(6);
list.sortedInsertion(8);
list.sortedInsertion(10);
let len = list.length;
while(len--){
    console.log(list.shift());
}