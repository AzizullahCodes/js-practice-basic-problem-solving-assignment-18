//  probem solving assignment 18
//  ques no 1
//  count vowel in string
 ans 
 var enterString = prompt('Enter string');
 var vowel = 0;
 for(var i = 0 ; i < enterString.length; i++){
     if(enterString[i] === 'a' ||enterString[i] === 'e' ||enterString[i] === 'i' ||
         enterString[i] === 'o' ||
        enterString[i] === 'u'
){vowel++;}
 }
console.log(vowel)
// ==============================================================================================================
// ques no 2
// factorial
// ans
// var enterNumber = +prompt('enter a number');
// var factorial =1;
// for(var i = 1; i <= enterNumber; i++){factorial = factorial * i}
// console.log(factorial)
// -------------------------------------------------------------------------------
// ques no 3 
// 💡 Challenge: Playlist Editor (Without Functions)
// You're given an array of songs. You will apply a series of .splice() operations one by one to edit the playlist.

// Here’s your starting playlist:
// let playlist = ["SongA", "SongB", "SongC", "SongD", "SongE"];
// Now apply these operations step by step using .splice():

// Replace "SongB" with "SongX".

// Insert "SongY" before "SongD".

// Delete the first two songs from the playlist.

// Add "SongZ" at the end of the playlist.
//  ans
// var playlist = ["SongA", "SongB", "SongC", "SongD", "SongE"];
// playlist.splice(1,1,"SongX");
// console.log(playlist);
// playlist.splice(3,0,"songY");
// console.log(playlist)
// playlist.splice(0,2);
// console.log(playlist);
// playlist.splice(4,0,"songZ");
// console.log(playlist)
// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// ques no 4 
// Print a number triangle
// 1
// 12
// 123
// 1234
// ans 
 for (let i = 1; i <= 5; i++) {
   let row = "";
 
   for (let j = 1; j <= i; j++) {
      row = row +j;
   
   }
  console.log(row);
 }
// -----------------------------------------------------------------------
// ques no 5
// Print a right-angle triangle
// *
// **
// ***
// ****
// ans 
// for(var i = 1; i<=4; i++){let star = '';
//     for(var j = 1; j <=i;j++){star = star + '*';}
//     console.log(star)
// }
// ========================================================================================
// ques no 6
// Print a square of stars
// *****
// *****
// *****
// *****
// ans 
// for(var i = 1; i <=4; i++){var str = '';
//     for(var j = 1; j <=4 ; j++){str = str + '*'}
//     console.log(str)
// }
// -----------------------------------------------------------------
// ques no 7
// Print a reverse triangle
// ****
// ***
// **
// *
// ans 
// for(var i = 4 ; i > 0; i-- ){let str = '';
//     for(var j = 1 ; j <= i;j++){str = str + '*';}
//     console.log(str)
// }
// -----------------------------------------------------------------------
// ques no 8
// ans 
// Print all pairs of numbers from 1 to 3
// (1,1) (1,2) (1,3)
// (2,1) (2,2) (2,3)
// (3,1) (3,2) (3,3)
// ans
// for(var i = 1; i <= 3; i++){let row = '';
//     for(var j = 1; j <= 3; j++){row = row + `(${i},${j})`}
//     console.log(row)
// }
// ==============================================================================
// ques no 9
// Sum of elements in a 2D array

// Use nested loops to sum all elements of:
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// ans 
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// let total = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     total += arr[i][j];
//   }
// }

// console.log("Sum of all elements:", total);
// =================================================
// ques 10 
// half pyramid using alphabets
// ans 
// for(var i = 1; i<= 4; i++){let row = '';
//     for(var j = 1; j <= i; j++){row = row + '*'}
//     console.log(row)
// }
// ======================================================================
// ques no 11
// ans 
// for(var i = 1; i <=10 ; i++){ let row = '';
//     for(var j = 1 ; j <= i; j++){row = row + '*';}
//     console.log(row)
// }
// ================================================================================
// quest no 12
// ans 
// let firstNames = ['Blueray','upchuck','lojack','gizmo','dorag'];
// let lastNames = ['zzz','burp','dogbone','droop'];
// let fullName = [];
// for(var i = 0; i < firstNames.length; i++){
//     for(var j = 0; j < lastNames.length; j++){fullName.push(firstNames[i]+ ' '+ lastNames[j])}
    
// }
// console.log(fullName)
// -------------------------------------------------------------------------------------------------
// ques no 13
// Multiplication table generator 1 to 10
// ans 
// for(let i = 1; i <= 5; i++){console.log(`table of ${i}`);
// for(let j = 1; j<=5; j++){console.log(`${i}* ${j} = ${i * j}`)}}
// ----------------------------------------------------------------------------------------------
// ques no 14
// ans 
// for(var i = 10; i > 0; i--){let str = '';
//     for(var j =1 ; j<= i; j++)
// {str = str + '&'}
// console.log(str)}
// --------------------------------------------------------------------------------------------
// ques no 15
// square of stars
// ans
// for(var i = 1; i <= 5; i++){let str = '';
//     for(var j = 1; j <= 5; j++){str = str + '*'}
//     console.log(str)
// }
// .......................................................................................................
// ques no 16
// simple calculator grid
// ans 
// for(let i = 1; i <=5; i++){for(let j = 1; j <=5; j++)
// {let add = i + j;
//     let sub = i - j;
//     let mul = i * j;
//     console.log(`${i},${j} => +:${add},-:${sub},*:${mul}`)
// }
// }
// ----------------------------------------------------------------------------------------------------
// ques no 17
// full pyramid of stars
// ans 
// for(var i = 1; i<= 7;i++){if(i % 2 !== 0){let str = '';
//     for(j = 1; j <=i; j++){str = str + "*"}
//     console.log(str)

    
// }
// }
// ============================================================================================
// ques 18
// Invert full pyramid
// ans 
// for(var i = 7; i >0; i--){if(i % 2 !== 0){let str = '';
//     for(var j = 1; j <= i; j++){str = str + '*'}
//     console.log(str)
// }}
// __________________________________________________________________________________________________
// ques no 19
// Floyd's triangle
// ans 
// let num = 1;
// for(let i = 1; i <= 4; i++){let row = '';
//     for(let j = 1; j <= i; j++){row+= num + '';
//          num++;
//     }
//     console.log(row)
// }

// ________________________________________________________________________________________________________
// ques no 20
// square of stars
// ans
// for(let i = 1; i<= 5; i++){let str = '';
//     for(let j = 1; j<= 5; j++){str = str + '*';}
//     console.log(str)
// }
// _______________________________________________________________________________________________
// ques no 21
// right angle triangle of stars
// ans 
// for(let i = 1; i <=10; i++){let triangle = '';
//     for(let j = 1; j <= i; j++){triangle = triangle + "*";}
//     console.log(triangle);
// }
// ___________________________________________________________________________________
// ques no 22
// Invert triangle of stars
// ans 
// for(let i = 10; i > 0; i--){let triangle = '';
//     for(let j = 1; j <=i; j++){triangle = triangle + '*';}
//     console.log(triangle)
// }
// _____________________________________________________________________________________________________
// ques no 23
// triangle of number
// ans 
// let num = 1;
// for(let i = 1; i <=5; i++){let triangle = '';
//     for(let j = 1 ; j<= i; j++){triangle = triangle + j;
        
//     }
//     console.log(triangle)
// }
// ________________________________________________________________________________________
// ques no 24
// Inverted triangle of numbers
// ans 
// for(var i = 5 ; i > 0; i--){let triangle = '';
//     for(var j = 1; j <= i; j++){triangle = triangle + j;}
//     console.log(triangle)
// }
// _______________________________________________________________________________
// ques no 25
// Hollow Square
// ans
// for(let i = 1; i<= 5; i++){let row = '';
//     for(let j = 1; j<=5; j++){if(i=== 1 || i === 5 ||j === 1 || j === 5){row = row + '*';}
// else{row = row + '';}}
// console.log(row)
// }
// --------------------------------------------------------------------------------------------------
// ques no 26
// 💡 Question:
// Write a JavaScript program that prints the following number pattern using nested loops:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ans 
// for(let i = 1; i <= 5; i++){let print = '';
//     for(let j = 1; j <= i; j++){print = print + j;

//     }
//     console.log(print)
// }
// ___________________________________________________________________________________________________
// ques no 27
// 🔁 4. Multiplication Table (1–5)
// Question:
// Print a table like this:
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25
// ans 
// for(let i = 1; i<= 5; i++){row = '';
//     for(let j = 1; j <=5; j++){row = row + ' ' + (i * j);}
//     console.log(row)
// }
// ____________________________________________________________________________________________________
// ques no 28
// 🔟 JavaScript Practice Tasks
// 1️⃣ Even or Odd Checker
// Ask the user for a number and check if it's even or odd.
// ans 
// let enterNumber = +prompt('enter a number')
// if(enterNumber > 0){if(enterNumber % 2 === 0){console.log(enterNumber,'is an even number')}
// else{console.log(enterNumber,'is an odd number')}}
// else if(enterNumber === 0){console.log(enterNumber,'is zero')}
// else if(enterNumber < 0){console.log(enterNumber,'is negative number')}
// else{console.log('Invalid entry')}
// ___________________________________________________________________________________________________
// ques no 29
// 2️⃣ Maximum of 3 Numbers
// Create a program to find the largest of three numbers.
// ans 
// let enterFirstNumber = +prompt('enter first number');
// let enterSecondNumber = +prompt('enter second number');
// let enterThirdNumber = +prompt('enter third number');
// if(enterFirstNumber > enterSecondNumber && enterFirstNumber > enterThirdNumber){console.log(enterFirstNumber,'is greater than secnod and third number')}
// else if(enterSecondNumber > enterFirstNumber && enterSecondNumber > enterThirdNumber){console.log(enterSecondNumber,'is greater than first and third number')}
// else{console.log(enterThirdNumber,'is greater than first and second number')}
// ______________________________________________________________________________________________
// ques no 30
// 3️⃣ Array Sum Calculator
// Given an array of numbers, find the total sum.
// let nums = [2, 4, 6, 8]; // Output: 20
// ans 
// first method
// let nums = [2,4,6,8];
// // let sum = nums[0] + nums[1] + nums[2] + nums[3];
// // console.log(sum)
// // second method by loop
// let sum = 0;
// for(let i = 0; i < nums.length; i++){sum = sum + nums[i]}
// console.log(sum)
// __________________________________________________________________________________________________
// ques no 30
// 4️⃣ Count Even Numbers in Array
// Count how many even numbers are in a given array.
// let arr = [1, 2, 3, 4, 6];
// ans 
// let arr = [1,2,3,4,6];
//  var even = [];
//  for(let i = 0; i < arr.length; i++){if(arr[i] % 2 === 0){even.push(arr[i]);
//  }}
// console.log(even);
// var len = even.length;
// console.log(len);
// console.log(len,'even numbers are in array')
//  _____________________________________________________________________________________________
// ques no 31
// 5️⃣ Reverse a String
// Take a string and reverse it using a loo
// Input: "hello" → Output: "olleh"
//  ans 
// let str = 'hello';
// for(let i = str.length; i >= 0; i--){console.log(str[i])}
// _____________________________________________________________________________________________
// ques no 32
// 6️⃣ Check if a Number is Prime
// Write code to check if a number is a prime number or not.
// Input: 7 → Output: "Prime"
// Input: 9 → Output: "Not Prime"
// let number = 13; // You can change this to any number
// let isPrime = true;

// if (number <= 1) {
//   isPrime = false; // 0 and 1 are not prime
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break; // No need to check further
//     }
//   }
// }

// if (isPrime) {
//   console.log(number + " is a prime number");
// } else {
//   console.log(number + " is not a prime number");
// }
// __________________________________________________________________________
// ques no 33
// 8️⃣ Array of Multiples
// Create an array that stores the first 10 multiples of a number.
// Input: 3 → Output: [3, 6, 9, 12, ..., 30]
// ans 
// let enterNumber = +prompt('enter number');
// let array = [];
// for(let i = 1; i <= 10; i++){
//     array.push(i*enterNumber)
// }
// console.log(array)
// ________________________________________________________________________
// ques no 34

