class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    #root;
    constructor(){
        this.#root = null;
    }

    insert(val){
        let node = new Node(val)
        if(this.#root === null){
            this.#root = node;
            return true;
        }else{
            let rt = this.#root;
            while(rt!==null){
                if(rt.value === val) return false;
                if(val<rt.value){
                    if(rt.left === null){
                        rt.left = node;
                        return true;
                    }else{
                        rt = rt.left;
                    }
                }else{
                    if(rt.right === null){
                        rt.right = node;
                        return true;
                    }else{
                        rt = rt.right
                    }
                }
            }
        }
    }

    find(value){
        if(this.#root === null) return false;
        let rt = this.#root;
        while(rt){
            if(rt.value === value) return true;
            if(value<rt.value){
                rt = rt.left;
            }else{
                rt = rt.right;
            }
        }
        return false;
    }

    // Breadth first search 
    Bfs(){
        let data = [], 
            queue = [],
            node = this.#root;
        queue.push(node);
        while(queue.length !== 0 ){
            node = queue.shift();
            data.push(node.value);
            if(node.left)
                queue.push(node.left);
            if(node.right)
                queue.push(node.right);
        } 
        return data;
    }

    DfsPreOrder(){
        let data = [];
        let node = this.#root;
        const preOder = node => {
            if(node === null) return;
            data.push(node.value);
            preOder(node.left);
            preOder(node.right);
        }
        preOder(node);
        return data;
    }

    DfsPostOrder(){
        let data = [];
        let node = this.#root;
        const postOder = node => {
            if(node === null) return;
            postOder(node.left);
            postOder(node.right);
            data.push(node.value);
        }
        postOder(node);
        return data;
    }

    DfsInOrder(){
        let data = [];
        let node = this.#root;
        const inOder = node => {
            if(node === null) return;
            inOder(node.left);
            data.push(node.value);
            inOder(node.right);
        }
        inOder(node);
        return data;
    }

}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(6);
bst.insert(9);
bst.insert(4);
bst.insert(5);
console.log(bst.DfsPreOrder())// [10,6,4,5,9,12]
console.log(bst.DfsPostOrder())// [ 5, 4, 9, 6, 12, 10 ]
console.log(bst.DfsInOrder())// [ 4, 5, 6, 9, 10, 12 ]