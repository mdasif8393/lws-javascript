// //Default Parameters

// function a(x = 1, y = 1) {
//     return x * y;
// }

// console.log(a(1));




// //Arguments
// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// const maxNumber = findMax(1, 2, 3, 33, 4, 5, 6, 7);
// console.log(maxNumber);






//// Function Rest Parameter
// function sum(...args) {
//     let sum = 0;
//     for (x of args) {
//         sum = sum + x
//     }
//     return sum;
// }

// const sumNumbers = sum(12, 32, 442, 42);
// console.log(sumNumbers);