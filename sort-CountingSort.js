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

///////////////////////////////////////////////////
// Sorting numbers  (so 66 and 6 aren't next to each other)

function sortAccend (array) {
    let arrayAccend = array.sort((function(a,b){return a-b}))
    console.log("accending array", arrayAccend)
    console.log("lowest num in array", arrayAccend[0])
}

sortAccend([1,6,7, 66, 18])


function sortDecend (array) {
    let arrayDecend = array.sort((function(a,b){return b-a}))
    console.log("decending array", arrayDecend)
    console.log("highest num in array", arrayDecend[0])
}

sortDecend([1,6,7, 66, 18])

//////////////////////////////////////////////////
