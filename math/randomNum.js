/*
Math.random() * max-min) + min;
                ^max-exclusive
                ^min-inclusive

Math.floor(Math.random(num))  - random # b/w 0(inclusive) and num(not inclusive)

Math.random() - random FLOAT b/w 0(inclusive) and 1(not inclusive)
*/

//////////////////////////////////////////////////////////////
//Random Fraction
function randomFraction() {

  return Math.random();   //Math.random can never be 1
}

console.log(randomFraction())
//////////////////////////////////////////////////////////////
//Random Whole Number
function randomWholeNum() {

  return Math.floor(Math.random() * 10)
}

console.log(randomWholeNum())
/////////////////////////////////////////////////////////////
//Random Number within a Range
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

console.log(randomRange(5, 15))
///////////////////////////////////////////////////////////////
