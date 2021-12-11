/*
Find the longest prefix (longest leading fragment) of an array A in which there is an equal number of occureane of X and Y, where X and Y are integers.
Return -1 if there is no prefix with equal number of X and Y.
Example: solution(7,42,[6, 42, 11, 7, 1, 42]) returns 4

function solution(X, Y, A) {
  //write code here
}
*/
function solution(X, Y, A) {
    var N = A.length;

    var result = 0;
    var nX = 0;
    var nY = 0;

    for (var i = 0; i < N; i++) {
        if (A[i] == X)
            nX += 1;

        else if (A[i] == Y)
            nY += 1;

        if (nX == nY)
            result = i
    }

    if(result === 0){result = -1}

    return result;
}
console.log(solution(7,42,[6, 42, 11, 7, 1, 42]))  //returns 4
console.log(solution(6,13,[13,13,1,6]))   // returns -1
console.log(solution(100,63,[100,63,1,6,2,13])) // returns 5
console.log(solution(1,2,[2,1,1,2,1,2,2]))  // returns 5
