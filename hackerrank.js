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
///////////////////////////////////////////////////////////////////////////////
// Finding Max and Min in an array
//Given five positive integers, find the minimum and maximum values that
// can be calculated by summing exactly four of the five integers.
function miniMaxSum(arr) {
  let min = Math.min(...array)
  let max = Math.max(...array)
  let minTot = 0;
  let maxTot = 0;

// find min number in Array, add the rest to find total of largest nums
  const minIndex = arr.indexOf(min)
  arr.splice(minIndex, 1)
  for(let i= 0; i < arr.length; i++) {
    maxTot = maxTot + arr[i]
  }
  arr.push(min)

// find max number in Array, add the rest to find total of smallest nmbs
  const maxIndex = arr.indexOf(max)
  arr.splice(maxIndex, 1)
  for(let i= 0; i < arr.length; i++) {
    minTot = minTot + arr[i]
  }

  console.log(minTot, maxTot)
}
const array = [2, 1, 3, 4, 5]
miniMaxSum(array)
///////////////////////////////////////////////////////////////////////
console.log('\nConvert to Military Time')
// convert time to military time

function timeConversion(s) {
  let array = s.split(":")
  let hour = parseInt(array[0])

  if(s.substring(8) == 'PM') {
    hour = hour + 12
  }

  hour = hour.toString()
  array.splice(0, 1, hour)

  let militaryTime = array.join(':')
  militaryTime = militaryTime.substring(0, 8)
  console.log("original time: ", s)
  console.log(militaryTime)
}

timeConversion('01:05:45PM')
///////////////////////////////////////////////////////////////////////
//military time part 2

function timeConversion1(s) {
  let array = s.split(":")                              // convert string to array, seperated by :
  let hour = parseInt(array[0])                         // change hour from string to integer

  if(s.substring(8) == 'PM' && hour != 12) {            // convert to military time
    hour = hour + 12
  } else if (s.substring(8) == 'AM' && hour == 12) {
    hour = "00"
  } else if(s.substring(8) == 'PM' && hour == 12) {
    hour = hour
  } else {
    hour = `0${hour}`
  }
  hour = hour.toString()                                // change hour from integer back to string
  array.splice(0, 1, hour)                              // replace old hour with military hour
  let militaryTime = array.join(':')                    // convert array back to string
  militaryTime = militaryTime.substring(0, 8)           // get ride of "PM"
  return militaryTime
}

console.log(timeConversion1('12:05:45PM'))
