//checks for non duplicate in array

function lonelyinteger(a) {
  //sort the list
  let sorted = a.sort()
  //set empty array
  let nonDup = [];

  for(let i = 0; i < a.length; i++) {
    //checks if first element in array, then preform check
    if(i == 0) {
      if(sorted[i] != sorted[i + 1]){
        nonDup.push(sorted[i])  //push to empty array if non-dup
      }
      //checks if last element in array, then preform check
    } else if(i === a.length - 1) {
      if(sorted[i] != sorted[i - 1]){
        nonDup.push(sorted[i])  //push to empty array if non-dup
      }
      //the rest of elements preform the check
    } else {
      if(sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]){
        nonDup.push(sorted[i])  //push to empty array if non-dup
      }
    }
  }

  console.log(nonDup)
}
lonelyinteger([1,2,3,4,3,2, 6, 6, 5, 2, 6, 7, 8,1])
