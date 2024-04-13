// WPU Coding Challenge 2024
// 25/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076

const doubleChar = (str) => str.split('').map(el => el + el).join('');

// function doubleChar(str) {
//   return str.split('').map(el => el + el).join('');
// }

// function doubleChar(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//     result += str[i];
//   }
//   return result;
// }

console.log(doubleChar("NaZaFa"));