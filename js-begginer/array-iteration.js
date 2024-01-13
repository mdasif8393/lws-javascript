// //for each
// const numbers = [45, 4, 9, 16, 25];
// function myFunction(value, index, array) {
//     console.log("value", value);
//     console.log("index", index);
//     console.log("array", array);
// }

// numbers.forEach(myFunction);


// //map
// const numbers1 = [45, 4, 9, 16, 25];
// const result = numbers1.map(myFunction);

// function myFunction(value) {
//     return value * 2;
// }
// console.log(result);


// // filter
// const numbers = [45, 4, 9, 16, 25];
// const newArray = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//     return value > 10
// }
// console.log(newArray);

// //reduce
// const numbers = [45, 4, 9, 16, 25];
// const reduce = numbers.reduce(myFunction, 10);

// function myFunction(total, value, index, array) {
//     return total + value;
// }

// console.log(reduce);



// // every
// const numbers = [45, 4, 9, 16, 25];
// const newArray = numbers.every(myFunction);

// function myFunction(value, index, array) {
//     return value > 3;
// }

// console.log(newArray);

// //some
// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }
// console.log(someOver18);

// // form
// console.log(Array.from("ABCDEFG"));

// //iondexof()
// const fruits = ["Apple", "Banana"];
// console.log(fruits.indexOf("Apple"));


// //lastIndexof()


// //keys
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// for (let x of keys) {
//     console.log(x);
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//     console.log(x);
// }