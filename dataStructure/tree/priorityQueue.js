class PriorityQueue{
    #heap
    constructor(){
        this.#heap = [];
    }
    #bubbleUp(){
        if(this.#heap.length>1){
            let childIndex = this.#heap.length-1;
            let parentIndex = Math.floor((childIndex-1)/2);
            while((this.#heap[parentIndex]!== undefined && this.#heap[childIndex] !== undefined) && this.#heap[childIndex].priority < this.#heap[parentIndex].priority){
                [this.#heap[childIndex],this.#heap[parentIndex]] = [this.#heap[parentIndex],this.#heap[childIndex]];
                childIndex = parentIndex;
                parentIndex = Math.floor((childIndex-1)/2);
            }
        }
    }
    enqueue(value,priority){
        let node = new Node(value,priority);
        this.#heap.push(node);
        this.#bubbleUp();
    }

    #sinkDown(){
        if(this.#heap.length > 1){
            let parentIndex = 0,childIndex;
            if(this.#heap.length === 2){
                childIndex = 1;
            }else{
                childIndex = this.#heap[1].priority>this.#heap[2].priority ? 2:1;
            }
            while(this.#heap[parentIndex].priority>this.#heap[childIndex].priority){
                [this.#heap[parentIndex],this.#heap[childIndex]] = [this.#heap[childIndex],this.#heap[parentIndex]];
                parentIndex = childIndex;
                if(this.#heap[2*parentIndex+1]!== undefined && this.#heap[2*parentIndex+2] !== undefined){
                    childIndex = this.#heap[2*parentIndex+1].priority>this.#heap[2*parentIndex+2].priority ? 2*parentIndex+2:2*parentIndex+1;
                }else{
                    return;
                }
            }
        }
    }

    dequeue(){
        const min = this.#heap[0];
        if(this.#heap.length>1){
            this.#heap[0] = this.#heap.pop();
            this.#sinkDown();
        }else{
            this.#heap.pop();
        }
        return min;
    }
}

class Node{
    constructor(value,priority) {
        this.value = value;
        this.priority = priority;
    }
}


const pq = new PriorityQueue();
pq.enqueue("Izak",100);
pq.enqueue("Shofuil",0);
pq.enqueue("No-name",10);
pq.enqueue("Piku",2);
pq.enqueue("Shiku",1);
pq.enqueue("Ekri",3);
pq.enqueue("Halum",0);
pq.enqueue("Meena",15);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());