// Convert to String
const convertToString = (num1, num2, num3) => {

  let numString = num1 + " " + num2 + " " + num3;
  numString.toString();

  console.log("Data type:", typeof(numString))
  return numString.toString();
 };
console.log("Numbers turned to String:", convertToString(1, 6, 2));

//########################################################################

// Combine Strings into Sentence
const makeSentence = (param1, param2, param3, param4) => {
  console.log(`Combine strings: ${param1} really ${param2} ${param3} hot ${param4}... now!`)
};

makeSentence('I', 'want', 2, 'chimichangas');
