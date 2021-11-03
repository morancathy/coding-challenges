// Challenge 1: Capitalize Fist Word In Sentence

function capitalize(str) {
  let turnStringIntoArray = str.split(" ");
  let newArray = [];

  for(let i = 0; i < turnStringIntoArray.length; i++){
      let word = turnStringIntoArray[i].charAt(0).toUpperCase() + turnStringIntoArray[i].slice(1);
      newArray.push(word)
    }

  let turnArrayIntoString = newArray.join(" ");

  return turnArrayIntoString;
}

let originalString = 'cathy is my name, diving is my game.';
let capitalizedString = capitalize(originalString);

console.log("Capitalize Every Word In Sentence:\nOriginal String: ", originalString);
console.log("Capitalized String:", capitalizedString);
//########################################################################
// Capitalize First Word

function capitalize2(str) {
  let word = str.charAt(0).toUpperCase() + str.slice(1)
  return word;
}

let originalString2 = 'three blind mice';
let capitalizedString2 = capitalize2(originalString2);

console.log("\nCapitalize First Word:\nOriginal String: ", originalString2);
console.log("Capitalized String:", capitalizedString2);

//########################################################################
