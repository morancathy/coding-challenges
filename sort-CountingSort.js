// Alternative sorting, the counting sort
//create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end,run through your counting array, printing the value of each non-zero valued index that number of times.

function countingSort(arr) {
  //create array of 100 elements, all will value 0
  let counterArray = Array(100).fill(0);

   //loop through arr parameter
   for (let numberInsideArray of arr) {
     /*for each number inside arr, match that to the index
     inside counterArray and increment its value*/
     counterArray[numberInsideArray]++
   }
    return counterArray;
}

let sortedArr = countingSort([1,2,3,4,4,3,2,1])
console.log(sortedArr)
