/*
    Max Heap follows only one rule:
        Childs must be smaller than the parent.
        Or, The parent must larger than childs.
    There is no rules like left has to be smaller or right has to be larger than the parent

    In an array left child is stored at 2n+1 and right child is stored at 2n+2.
    For a child index n, its parent is at (n-1)/2 
*/

class BinaryMaxHeap{
    #heap
    constructor(){
        this.#heap = [];
    }
    #bubbleUp(){
        let childIndex = this.#heap.length-1;
        let parentIndex = Math.floor((childIndex-1)/2);
        while(this.#heap[childIndex]>=this.#heap[parentIndex]){
            [this.#heap[childIndex],this.#heap[parentIndex]] = [this.#heap[parentIndex],this.#heap[childIndex]];
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex-1)/2);
        }
    }
    insert(value){
        this.#heap.push(value);
        this.#bubbleUp();
    }

    #sinkDown(){
        let parentIndex = 0,childIndex;
        childIndex = this.#heap[1]<this.#heap[2]? 2:1;
        while(this.#heap[parentIndex]<=this.#heap[childIndex]){
            [this.#heap[parentIndex],this.#heap[childIndex]] = [this.#heap[childIndex],this.#heap[parentIndex]];
            parentIndex = childIndex;
            childIndex = this.#heap[2*parentIndex+1]<this.#heap[2*parentIndex+2]? 2*parentIndex+2:2*parentIndex+1;
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

