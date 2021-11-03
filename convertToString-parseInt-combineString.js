// Convert to String
const convertToString = (num1, num2, num3) => {

  let numString = num1 + " " + num2 + " " + num3;
  numString.toString();

  console.log("Data type:", typeof(numString))
  return numString.toString();
 };
console.log("Numbers turned to String:", convertToString(1, 6, 2));

/////////////////////////////////////////////////////////////////////

// Convert to String parseInt
const convertToInteger = (str) => {

  return parseInt(str)

 };
console.log("Convert to Integer", convertToInteger("56"));
console.log("Type of: ", typeof convertToInteger("56"))

// using parseInt with a Radix. specifies the base of the number in the string.
//Base 2 is binary. Default  is base 10

const convertToInteger2 = (str) => {

  return parseInt(str, 2)  //now not default
 };
console.log("Using Radix", convertToInteger2("10011")); //convert this binary number


//########################################################################

// Combine Strings into Sentence
const makeSentence = (param1, param2, param3, param4) => {
  console.log(`Combine strings: ${param1} really ${param2} ${param3} hot ${param4}... now!`)
};

makeSentence('I', 'want', 2, 'chimichangas');
