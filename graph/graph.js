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
    
    removeEdge(v1,v2){
        if(this.#adjacencyList[v1] !== undefined && this.#adjacencyList[v2] !== undefined){
            this.#adjacencyList[v1] = this.#adjacencyList[v1].filter(v=> v!==v2);
            this.#adjacencyList[v2] = this.#adjacencyList[v2].filter(v=> v!==v1);
            return true;
        }
        return false;
    }

    removeVertex(vertex){
        let item;
        while(this.#adjacencyList[vertex].length){
            item = this.#adjacencyList[vertex].pop();
            this.removeEdge(vertex,item);
        }
        if(this.#adjacencyList[vertex] !== undefined) delete this.#adjacencyList[vertex];
        return true;
    }

}