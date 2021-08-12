// ##############################################################################
console.log(`\nFLATTEN ARRAY`)
// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array

function flattenArray(arrays) {
  return arrays.flat()
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))   //[1, 2, 3, 4, 5, 6, 7]
// ##############################################################################
console.log(`\nANAGRAM`)
// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not

function isAnagram(str1, str2) {
    let sorted1 = str1.split('').sort().join('').toLowerCase()
    let sorted2 = str2.split('').sort().join('').toLowerCase()
    return(sorted1 === sorted2)
  return true
}

console.log(isAnagram('below', 'elbow'))                //true
console.log(isAnagram('Dormitory', 'dirty room##'))     //false
// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

    // .replace(/[^\w]/g, '')
     // sen = sen.replace(/\$|,/g, '')  //gets rid of non alphanumeric
#############################################################################
console.log(`\nLETTER CHANGES`)
// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A

function letterChanges(str) {
 let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
   if (char === 'z' || char === 'Z') {
     return 'a';
   } else {
     return String.fromCharCode(char.charCodeAt() + 1);
   }
 });

 newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

 return newStr;
}

// Call Function
const output = letterChanges('Hello There');

console.log(output);    //Ifmmp UIfsf'

// ##############################################################################
