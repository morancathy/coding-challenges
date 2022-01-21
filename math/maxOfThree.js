// find the max of three numbers
const maxOfThree = (x, y, z) => {
  if (x >= y && x >= z) {
    return x
  } else if (y >= z && y >= x) {
    return y
  } else if (z >= x && z >= y) {
    return z
  } else {
    return x
  }
}
console.log(maxOfThree(6, 9, 1));
