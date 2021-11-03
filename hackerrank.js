// Finding percent of type of number, toFixed
function plusMinus(arr) {
    let neg = 0, pos = 0, zero = 0
    let n = arr.length;

    for(let i = 0; i < n; i++){
      if(arr[i] < 0) {
        neg = neg + 1
      } else if (arr[i]> 0){
        pos = pos + 1
      } else {
        zero = zero + 1
      }
    }

    neg = neg / n;
    pos = pos / n;
    zero = zero /n;

    console.log(pos.toFixed(6))
    console.log(neg.toFixed(6))
    console.log(zero.toFixed(6))
}
plusMinus([-1, 2, 0])
