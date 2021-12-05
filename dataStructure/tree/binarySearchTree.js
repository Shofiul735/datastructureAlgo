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


}
const bst = new BinarySearchTree();
bst.insert(2);
bst.insert(1);
bst.insert(6);
bst.insert(6);
console.log(bst.find(1));
console.log(bst.find(7));
console.log(bst.find(6));