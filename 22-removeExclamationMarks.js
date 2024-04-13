// WPU Coding Challenge 2024
// 22/366
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

const removeExclamationMarks = (s) => s.split('!').join('');

// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }

// function removeExclamationMarks(s) {
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== '!') {
//       result += s[i];
//     }
//   }
//   return result;
// }

console.log(removeExclamationMarks('Hello World!'));