//Square Integers Greater then Zero
  //Filter decimols and less then 0
  //Map through Array

const numbers = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = arr => {                                                  //x is [4, 42, 6]
  const squaredInts = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)

  return squaredInts
}

const squaredInts = squareList(numbers)
console.log("squared integers" + squaredInts) //16, 1764, 36
