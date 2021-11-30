/*
* Run time O(nlog(n)), space complexity O(log(n))(better than merge sort), but if array is already sorted
* or reversely sorted then Run time O(n^2);
*/


function pivot(arr,start=0,end=arr.length-1){
    let index=start;
    let value = arr[index];
    for(let i=start+1;i<=end;i++){
        if(arr[i]<value){
            index++;
            [arr[i],arr[index]] = [arr[index],arr[i]]; //swap
        }
    }
    [arr[start],arr[index]] = [arr[index],arr[start]]; //swap
    return index;
}


function quickSort(arr,left=0,right=arr.length){
    if(left>=right)
        return;
    let pivotIndex = pivot(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
    return arr;
}

console.log(quickSort([1,2,3,4,5,6,7,8,9,10]));