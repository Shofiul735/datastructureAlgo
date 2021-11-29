/**
 * 
 * mergeSort time complexity O(nlogn) and space complexity O(n)
 */

function mergeSort(arr){
    if(arr.length === 1)
        return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

function merge(left,right){
    let result=[];
    let i=0,j=0;
    while(i<left.length && j< right.length){
        if(left[i]<right[j]){
            result.push(left[i++]);
        }else{
            result.push(right[j++]);
        }
    }
    while(i<left.length){
        result.push(left[i++]);
    }
    while(j<right.length){
        result.push(right[j++]);
    }
    return result;
}

console.log(mergeSort([3,4,2,5,6,1,0,3,7,9,10]));