// Destructoring
// the old way of destructoring
var vox = {x: 3.6, y: 7.4, z: 6.54}

var x = vox.x; // x = 3.6
var y = vox.y; // y = 7.4
var z = vox.z; // z = 6.54

//the new way of destructoring
const {x: a, y: b, z: c} = vox; // a =3.6, b = 7.4, z = 6.54
//////////////////////////////////////////////////////////////////////

const AVG_TEMP = {
  today: 77.5,
  tomorry: 79
};

function getTempOfTom(avgTemp) {

  const {tomorry: tempofTom} = avgTemp

  return tempofTom
}

console.log(getTempOfTom(AVG_TEMP))
//////////////////////////////////////////////////////////////////////
//destructoring nested Object

const LOCAL_FORECAST = {
  today: {min: 72, max: 83},
  tomorry: {min: 73.3, max: 84.6},
}

function getMaxOfTom(forecast) {
  const {tomorry: {max: maxOfTom}} = forecast

  return maxOfTom
}

console.log(getMaxOfTom(LOCAL_FORECAST))
////////////////////////////////////////////////////////////////////
// use destructoring to assign variables from arrays

const [g, h] = [1, 2, 3, 4, 5, 6]  //this assigns z to 1 and x to 2
console.log(g, h)  // 1  2
//diffrenece in array then objects is
//you cannot specify which element in the array goes where. Just goes in order
// BUT if want 4 to be a variable
const [d, r, , j] = [1, 2, 3, 4, 5, 6]
console.log(d, r, j)  // 1 2 4

////////////////////////////////////////////////////////////////////
// use destructoring to switch place of variables
let p = 8, l=6;
(() => {
  [p, l] = [l, p]
})()

console.log(p) //6
console.log(l) //8

////////////////////////////////////////////////////////////////////
// destructoring assignment with the rest operator

const source = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];

function removeFirstTwo(list) {
    const [, , ...arr] = list;  // comas mean do nothing for first element or second element.
                                // do nothing else, then return it
   // const [a, b, ...arr] = list;   could do this, a would = 1, b = 2, arr = the rest

    return arr;
}

const arr = removeFirstTwo(source)
console.log(arr)
console.log(source)

////////////////////////////////////////////////////////////////////
// destructoring assingment to pass an object as a function's params
const stats = {
  max: 56.78,
  median: 23.65,
  min: -0.75
};

const half = (function() {
  return function half({max, min}) {
    return (max + min) / 2.0
  }
})();
console.log(stats);
console.log(half(stats))
