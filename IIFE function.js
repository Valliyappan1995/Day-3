//Q1.Print odd numbers in an array
  
(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([11,24,37,48,59,67,85,98,105,111])

//Output : 
//11
//37
//59
//67
//85
//105
//111

//Q2.Convert all the strings to title caps in a string array

(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("I KNOW MY LIMITS");

  
//Output :
//'I Know My Limits'

//Q3.Sum of all numbers in an array 

(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([15,23,34,45])

//Output :
//117

//Q4.Return all the prime numbers in an array

(function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([2,9,17,39,71,11])

//Output :
//[ 2, 17, 71, 11 ]

//Q5.Return all the Palindromes in an array

(function () {
  var myArray = ['car', 'peep', 'himalaya', 'refer'];
  var arr = myArray.filter(function (a, b) {
    var palindrome = a.split('').reverse().join('');
    if (a == palindrome) {
      console.log(myArray[b]);
    }
  });
})()

//Output :
//peep
//refer

//Q6.Return median of two sorted arrays of the same size

( function() {
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
  
  })()

//Output :
//43

//Q7.Remove Duplicates from an array

(function () {
  
  let numbers = [41, 51, 62, 41, 64, 51, 75];
  
  let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
  console.log(duplicates);
})()

//Output :
//41
//51

//Q8.Rotate an array by k times

(function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
})([1,2,3,4,5],2)

//Output:
//[ 4, 5, 1, 2, 3 ]












