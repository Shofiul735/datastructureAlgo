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

}
const bst = new BinarySearchTree();
bst.insert(2);
bst.insert(1);
bst.insert(6);
bst.insert(5);
console.log(bst);