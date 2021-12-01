/*
* Time complexity O(nk) n is number of element in the array and k is highest number of digit in the elements
*/

function digitCount(num){
    // return number of digit in a number
    return Math.floor(Math.log10(num))+1;
}

function mostDigits(nums){
    let digit = 0;
    for(let i of nums){
        digit = Math.max(digit,digitCount(i));
    }
    return digit;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  


function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let i=0;i<maxDigitCount;i++){
        // It will create an array with 10 sub arrays.
        let digitBuckets = Array.from({length:10},()=>[]);
        for(let j=0;j<nums.length;j++){
            let digit = getDigit(nums[j],i);
            digitBuckets[digit].push(nums[j]);
        }
        //[1,2,3] = [[1],[2],[3]];
        nums = [].concat(...digitBuckets);
    }
    return nums;
}



console.log(radixSort([3,5,9,10,2,5]));