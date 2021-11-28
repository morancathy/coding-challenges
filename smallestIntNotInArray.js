/*Write a function given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].*/

function solution(A) {
    A = A.sort((function(a,b){return a-b}))
    let startingNum = 0;  //or can set to first element in array if want
  console.log(A)

    if (A[0] > 1){   //if lowest num is greater then 1, return 1
      return 1
    } else if (A[0] < 1){  //if theres a negative num in array return 1
      return 1
    } else {
      for(let i = 0; i < A.length; i++){
        if(A[i] !== startingNum){         //check if element doesnt equal staringNum (to skip over duplicates)
          if(A[i] === startingNum + 1) {  //check if element equals startingNum plus 1
            startingNum = A[i]            //set new startingNum
          } else {
            return startingNum + 1        //return startingNum plus 1
            }
          }
      }
      return startingNum + 1               //return startingNum plus 1
    }


}


console.log(solution([9, 65,1,4,3,2,5,8,6,7,11,10,12,13,14,1,1,15,16,15,16,157,17,18,19,20,21]))
