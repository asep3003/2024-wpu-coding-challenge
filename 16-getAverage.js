// WPU Coding Challenge 2024
// 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);

// function getAverage(marks){
//   let total = 0;
//   for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   return Math.round(total / marks.length);
// }

console.log(getAverage([2, 2, 2, 2]));