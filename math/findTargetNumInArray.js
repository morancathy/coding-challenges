
// any two side-by-side numbers add up to targetSum
function twoNumberSum1(array, targetSum) {
	let arrayToReturn = []

	for(let i = 0; i < array.length; i++){
		let sum1 = array[i] + array[i + 1]
		let sum2 = array[i] + array[i-1]

		if(sum1 === targetSum){
			arrayToReturn.push(array[i], array[i+1])
			return arrayToReturn
		}
    if(sum2 === targetSum){
			arrayToReturn.push(array[i], array[i-1])
			return arrayToReturn
		}
	}
}

let array1 = [3, 5, -4, 8, 11, -1, 6]
let summ = 10

console.log(twoNumberSum1(array1, summ))
///////////////////////////////////////////
//any 2 numbers in array add up to targetSum

function twoNumberSum(array, targetSum) {
	let arrayToReturn = []

	for(let i = 0; i < array.length; i++){
    let num1 = array[i]

    for(let j = 0; j < array.length; j++){
       let num2 = array[j]

      if(num1 !== num2){

        if((num1 + num2) === targetSum){
          arrayToReturn.push(num1, num2)

          return arrayToReturn
        }
      }
    }
	}
  return arrayToReturn
}

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let sum = 8

console.log(twoNumberSum(array, sum))
///////////////////////////////////////////
//any 3 numbers in array add up to targetSum

function threeNumberSum(array, targetSum) {
	let arrayToReturn = []

	for(let i = 0; i < array.length; i++){
    let num1 = array[i]

    for(let j = 0; j < array.length; j++){
      let num2 = array[j]

      for(let k = 0; k < array.length; k++) {
        let num3 = array[k]

        if(num1 !== num2 && num1 !== num3){

          if((num1 + num2 + num3) === targetSum){
            arrayToReturn.push(num1, num2, num3)

            return arrayToReturn
          }
        }
      }
    }
	}
  return arrayToReturn
}

let thisArray = [3, 5, -4, 8, 11, 1, -1, 6]
let thisSum = 15

console.log(threeNumberSum(thisArray, thisSum))
