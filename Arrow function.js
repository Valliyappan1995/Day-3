//Q1.Print odd numbers in an array

const funcArrow = () => {
  const odd= arr.filter(num => num %2 ==1)
  console.log(funcArrow);
}
odd(11,24,37,48,59,67,85,98,105,111)

//Output : 
//11
//37
//59
//67
//85
//105
//111

//Q2.Convert all the strings to title caps in a string array

const funcArrow = () => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
    console.log(funcArrow);
  }
  titlecaps(["I KNOW MY LIMITS"])

  //Output :
  //'I Know My Limits'

//Q3.Sum of all numbers in an array

let sum = () => {
    let sum = ar.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  sum([15,23,34,45])
  
  //Output :
  //117

//Q4.Return all the prime numbers in an array

let prime = (arr) => {
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

let CheckPalindromes= () => {
    var arr = myArray.filter(function (a, b) {
      var palindrome = a.split('').reverse().join('');
      if (a == palindrome) {
        console.log(myArray[b]);
      }
    });
  }
  CheckPalindromes(['car', 'peep', 'himalaya', 'refer'])
  
  //Output :
  //peep
  //refer