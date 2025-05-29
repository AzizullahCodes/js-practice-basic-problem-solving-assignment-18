// probem solving assignment 18
// ques no 1
// count vowel in string
// ans 
// var enterString = prompt('Enter string');
// var vowel = 0;
// for(var i = 0 ; i < enterString.length; i++){
//     if(enterString[i] === 'a' ||enterString[i] === 'e' ||enterString[i] === 'i' ||
//         enterString[i] === 'o' ||
//         enterString[i] === 'u'
//     ){vowel++;}
// }
// console.log(vowel)
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
// for (let i = 1; i <= 5; i++) {
//   let row = "";
 
//   for (let j = 1; j <= i; j++) {
//      row = row +j;
   
//   }
//   console.log(row);
// }
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
