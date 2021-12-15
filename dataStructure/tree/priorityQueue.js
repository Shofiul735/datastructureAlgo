class BinaryMinHeap{
    #heap
    constructor(){
        this.#heap = [];
    }
    #bubbleUp(){
        let childIndex = this.#heap.length-1;
        let parentIndex = Math.floor((childIndex-1)/2);
        while(this.#heap[childIndex]<=this.#heap[parentIndex]){
            [this.#heap[childIndex],this.#heap[parentIndex]] = [this.#heap[parentIndex],this.#heap[childIndex]];
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex-1)/2);
        }
        console.log(this.#heap);
    }
    insert(value){
        this.#heap.push(value);
        this.#bubbleUp();
    }

    #sinkDown(){
        let parentIndex = 0,childIndex;
        childIndex = this.#heap[1]>this.#heap[2]? 2:1;
        while(this.#heap[parentIndex]>=this.#heap[childIndex]){
            [this.#heap[parentIndex],this.#heap[childIndex]] = [this.#heap[childIndex],this.#heap[parentIndex]];
            parentIndex = childIndex;
            childIndex = this.#heap[2*parentIndex+1]>this.#heap[2*parentIndex+2]? 2*parentIndex+2:2*parentIndex+1;
        }
    }

    extractMax(){
        const max = this.#heap[0];
        if(this.#heap.length>1){
            this.#heap[0] = this.#heap.pop();
            this.#sinkDown();
        }else{
            this.#heap.pop();
        }
        return max;
    }
}

const bmh = new BinaryMinHeap();
bmh.insert(20);
bmh.insert(2);
bmh.insert(28);
bmh.insert(14);
bmh.insert(26);
bmh.insert(12);
bmh.insert(87);
console.log(bmh.extractMax());
console.log(bmh.extractMax());
console.log(bmh.extractMax());
console.log(bmh.extractMax());
console.log(bmh.extractMax());
console.log(bmh.extractMax());
console.log(bmh.extractMax());