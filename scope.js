var sum = 0;

function addThree() {
  var sum = 0
  sum += 3

  console.log("inside addThree" + sum)
}
addThree()
console.log(sum)

var shirt = 6
function sweater() {
  var shirt = 5
  return shirt
}
console.log(shirt)
console.log(sweater())
////////////////////////////////////////////////////
var a = 4;

function foo (x) {
  var b = a * 4;
  function bar (y) {
    var c = y * b;
    return c
  }
  return bar(b)
}

console.log(foo(a))
