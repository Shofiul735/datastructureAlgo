// Undirected graph

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


    addEdge(vertex1,vertex2){
        if(!this.#adjacencyList[vertex1].includes(vertex2,0) && !this.#adjacencyList[vertex2].includes(vertex1,0)){
            this.#adjacencyList[vertex1].push(vertex2);
            this.#adjacencyList[vertex2].push(vertex1);
            return true;
        }else if(!this.#adjacencyList[vertex1].includes(vertex2,0)){
            this.#adjacencyList[vertex1].push(vertex2);
            return true;
        }else if(!this.#adjacencyList[vertex2].includes(vertex1,0)){
            this.#adjacencyList[vertex2].push(vertex1);
            return true;
        }else{
            return false;
        }
    }
    

}