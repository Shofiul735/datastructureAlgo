/*
*    place the smallest item in the starting of the array 
*/


function selectionSort(arr){
    let lowest,temp;
    for(let i=0;i<arr.length;i++){
        lowest = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[lowest]>arr[j]){
                lowest = j;
            }
        }
        temp = arr[lowest];
        arr[lowest] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort([3,42,3,43,4,5]));