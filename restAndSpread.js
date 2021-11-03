// rest operator

const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0)  //summing them and returning result
  }
})();

console.log(sum(1, 2, 3, 4, 9))
/////////////////////////////////////////////////////////

// spread operator

const arr1 = ['jan', 'feb', 'mar', 'apr', 'may'];
let arr2
let arr3

(function() {
  arr3 = arr1  //this assigns arr1 EQUAL to arr3
  arr2 = [...arr1]   //lets you make a copy. It's not EQUAL to array 1, its equal to it's contents
  arr1[0] = 'potatoe' //we canged jan to potatoe so arr3[0] is now potatoe
})();

console.log(arr3)  //[ 'potatoe', 'feb', 'mar', 'apr', 'may' ]
console.log(arr2); // [ 'jan', 'feb', 'mar', 'apr', 'may' ]
/////////////////////////////////////////////////////////


function func1(a, b, c) {
  let num = 0;
  for(let i = 0; i < arguments.length; i++){
    num = num + arguments[i]

  }
  return num;
}
console.log("Using args: ", func1(2,3,4,5))


// Curious what the below option is all about. I saw it while searching for ags on google. Is it simply another way to do args?
const convertToString2 = (... args) => {
  return args.reduce((previous, current) => {
    return previous + current;
  })
 };

console.log("CTO Level using this thing I found on google: ", convertToString2(1, 6, 2, 1, 6, 2));



function addList1(param) {
  let num = 0;

  for(let i = 0; i < arguments.length; i++){
    num = num + arguments[i]
  }
  return num;
}

console.log(addList1(7,1))

console.log(`Adding unknown number of arguments together.\n${addList1()} `)

// const addList = (... args) => {
//   return args.reduce((previous, current) => {
//     return previous + current;
//   })
//  };

// addList(8,6,1)

// const addList = (... args) => {
//   return args.reduce((acc, item, index) =>, {
//     return item + acc
//   }, 0)
// }

//[1, 3, 5, 7]
/*
acc = 0
item = 1
return value = 1

acc = 1
item = 3
return value = 4

*/
