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

    depthFirstRecursive(start){
        const result = [];
        const visited = {};

        const dfs = (vertex)=>{
            if(!vertex) return null;
            result.push(vertex);
            visited[vertex] = true;
            this.#adjacencyList[vertex].forEach(element => {
                if(!visited[element]) return dfs(element);
            });
        }
        dfs(start);
        return result;
    }

    depthFirstIterative(start){
        let result = [];
        let stack = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;
        stack.push(start);

        while(stack.length>0){
            currentVertex = stack.pop();
            result.push(currentVertex);

            for(let i of this.#adjacencyList[currentVertex]){
                if(!visited[i]){
                    visited[i] = true;
                    stack.push(i);
                }
            }
        }
        return result;
    }

    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
            for(let i of this.#adjacencyList[currentVertex]){
                if(!visited[i]){
                    visited[i] = true;
                    queue.push(i);
                }
            }
        }
        return result;
    }

}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
console.log(g.breadthFirst("A"));
