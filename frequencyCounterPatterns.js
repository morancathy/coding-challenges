/*
Write a function which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length) { return false}

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1, 4])) // false (must be same frequency)

//////////////////////////////////////////////////////////////////////////
function validAnagram(str1, str2){
    const charFrequency = {};

    str1 = str1.replace(/\s+/g, ''); //Prevent spaces from ruining anagrams
    str2 = str2.replace(/\s+/g, ''); //Prevent spaces from ruining anagrams

    for(let i = 0; i < str1.length; i++){
        charFrequency[str1[i]] = (charFrequency[str1[i]] || 0) + 1;
    }
    for(let i = 0; i < str2.length; i++){
        charFrequency[str2[i]] = (charFrequency[str2[i]] || 0) - 1;
    }
    for(let key in charFrequency){
        if(charFrequency[key]){
            return false;
        }
    }
    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

/////////////////////////////////////////////////////////////////////
