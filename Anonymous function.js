//Q1.Print odd numbers in an array

const arr=[11,24,37,48,59,67,85,98,105,111];
const odd = function () {
  const odd= arr.filter(num => num %2 ==1)
  console.log(odd)
}
odd()

//Output : 
//11
//37
//59
//67
//85
//105
//111


//Q2.Convert all the strings to title caps in a string array

let str = function () {
  let arr = "i know my limits"
  let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  console.log(titlecase)
}
str()

//Output :
//'I Know My Limits'


//Q3.Sum of all numbers in an array

let func = function () {
    
  let ar = [15,23,34,45]
  let sum = ar.reduce(function(a, b){
      return a + b;
  });
  console.log(sum);
}
func()

//Output :
//117

//Q4.Return all the prime numbers in an array

let prime = function (arr) {
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};
console.log(prime([2,9,17,39,71,11]));

//Output :
//[ 2, 17, 71, 11 ]



//Q5.Return all the Palindromes in an array

let CheckPalindromes= function () {
  var myArray = ['car', 'peep', 'himalaya', 'refer'];
  var arr = myArray.filter(function (a, b) {
    var palindrome = a.split('').reverse().join('');
    if (a == palindrome) {
      console.log(myArray[b]);
    }
  });
}
CheckPalindromes()

//Output :
//peep
//refer

//Q6.Return median of two sorted arrays of the same size

let median = function() {
  const arr1 = [5, 32, 46, 76, 88,94];
  const arr2 = [7, 18, 27, 40, 55, 67];
  
    const a = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
  
    let half = a.length / 2 | 0;
  
    if (a.length % 2) {
    console.log(a[half]);
    } 
    else {  
    console.log((a[half] + a[half - 1]) / 2);
    }
  }
median()

//Output :
//43

//Q7.Remove Duplicates from an array
let findDuplicates = function () { 
  const yourArray = [41, 51, 62, 41, 64, 51, 75]
  let duplicates = []
  const tempArray = [...yourArray].sort() 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i])
    }
  }
  console.log(duplicates) 
}
findDuplicates()

//Output :
//41
//51

//Q8.Rotate an array by k times

let rotateArray =function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
rotateArray([1,2,3,4,5],2)

//Output:
//[ 4, 5, 1, 2, 3 ]


