function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift()  //will remove 1st item from list and return it
}

var testArr = [1,2,3,4,5];

console.log("Beofre: " + JSON.stringify(testArr))   // [1,2,3,4,5]
console.log("Beofre: " + testArr)                    // 1, 2, 3, 4, 5
console.log(nextInLine(testArr, 6))                 // 1
console.log("After: " + JSON.stringify(testArr))    // [2,3,4,5,6]
