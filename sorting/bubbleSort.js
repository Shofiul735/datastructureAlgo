/*
* This sorting method will move the largest value to the end of the array each iteration  
*/

function bubbleSort(arr){
    let temp;
    let swap;
    for(let i=0;i<arr.length;i++){
        swap = false;
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }
        if(!swap)
            return arr;
    }
    return arr;
}
const arr = [1,3,2,4,5];
console.log(bubbleSort(arr));