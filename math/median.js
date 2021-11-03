// find median of Array
// if array is odd, median is the middle number, after sorted
// if array is even, median is average of 2 middle numbers, after sorted

let array = [9, 66, 51, 90, 10, 12, 1]

const mid = Math.floor(array.length / 2) //math.floor makes it an integer
                                        //then divide in half to find index of middle element
console.log("mid index", mid)

const num = array.sort((a, b) => a - b); //sort array from small to big (prevents 9 and 90 from being grouped together)
console.log("sorted array", num)

if(array.length % 2 !== 0) {
 console.log('array is odd, so print element in mid index')
 console.log(num[mid])
} else {
   console.log('array is even, so print average of element before and after mid index')
 console.log((num[mid - 1] + num[mid+1]) /2)
}
