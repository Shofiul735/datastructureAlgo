class Graph{
    #adjacencyList;
    constructor(){
        this.#adjacencyList = {};
    }

    addVertex(vertex){
        if(this.#adjacencyList[vertex] === undefined){
            this.#adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }
}