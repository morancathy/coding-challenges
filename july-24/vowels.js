// Function that returns the number of vowels used in a string.

const vowels = (str) => {
  str = str.toLowerCase();
  let splitArrayChar = str.split("");
  let vowelArray = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for(let i = 0; i < splitArrayChar.length; i++){
    if(vowelArray.includes(splitArrayChar[i])){
      count++;
    }
  }
  return count;
};

let word = 'cathylovesbAseball';
let word1 = 'aEIoU';
let word2 = 'SkySkySky';
console.log(`Num of vowels in ${word}: ${vowels(word)}`) //should output 6
console.log(`Num of vowels in ${word1}: ${vowels(word1)}`) //should output 5
console.log(`Num of vowels in ${word2}: ${vowels(word2)}`) //should output 0
