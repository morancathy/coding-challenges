function freezeObj() {
  "use strict"
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS)

  try{
    MATH_CONSTANTS.PI = 99
  } catch(error){
    console.log("error" + error)
  }
  return MATH_CONSTANTS.PI
}

const PI = freezeObj();

console.log(PI)
