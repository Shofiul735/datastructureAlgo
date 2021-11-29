/*
*   in some cases it's better than selection and bubble sort, like array is almost sorted.
*/
const insertionSort=(arr)=>{
    let currVal,i,j;
    for(i=1;i<arr.length;i++){
        currVal = arr[i];
        for(j=i-1;j>=0 && currVal<arr[j];j--){
            // swap until smaller value than current value
            arr[j+1]=arr[j];
        }
        // j'th is the smaller than current value.
        arr[j+1]=currVal;
    }
    return arr;
}
console.log(insertionSort([2,3,4,2,4,6,7,2,1]));