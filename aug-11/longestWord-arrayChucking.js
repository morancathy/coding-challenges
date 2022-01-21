// ##############################################################################
console.log(`\nLONGEST WORD`)
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

console.log(longestWord("Hi there, my name is Cathy"))

///////////////////////////////////////////////////////////////////////////
//h. printLongestWord
function printLongestWord(string) {
  let str = string.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//////////////////////////////////////////////////////////////////////////////////

// function longestWord(sen) {
//
//   sen = sen.replace(/\$|,/g, '')  //gets rid of non alphanumeric
//   sen = sen.split(' ')            //creates array of strings, split by ' ' (space)
//   // const wordLength = sen.map(word => word = word.length)  //maps over each element and returns array of length of each element
//
//   let maxLength = 0;
//   let maxWord = sen[0]
//   for (let i = 0; i < sen.length; i++){
//     if(sen[i].length > maxLength) {
//       maxLength = sen[i].length
//       maxWord = sen[i]
//     }
//   }
//   return maxWord
// //   console.log(Math.max(...wordLength))   //returns largest
// //
// // return sen.sort((a, b) => b.length - a.length)[0]
// }
//
// console.log("24", longestWord('Hi there, my name is Cathy'))
//
//
// longestWord ='Hi there, my name is Cathy'
// console.log(longestWord.replace(/\W/g, ''))  //gets rid of non alphanumeric but makes it one string
// // HitheremynameisCathy
//
// console.log(longestWord.replace(/\$|,/g, ''))  //gets rid of non alphanumeric and keeps sentence
// //Hi there my name is Cathy

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a stringp

// ##############################################################################
console.log(`\nARRAY CHUCNKING`)
// / CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // SOLUTION 1

  // // Init chunked arr
  // const chunkedArr = [];
  // // Set index
  // let i = 0;

  // // Loop while index is less than the array length
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunk length nd push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }

  // return chunkedArr;

  // SOLUTION 2

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

// ##############################################################################
//  getTwoLengths
const getTwoLengths = (arr) => {
  let biggest = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= biggest) {
      biggest = arr[i].length 
    }
  }
  return biggest
}
console.log(getTwoLengths(["Hank", "Hippopopalous"]));
