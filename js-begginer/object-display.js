// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let text = "";

// for (let x in person) {
//     text += person[x] + " ";
// }
// console.log(text);





// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// const personArray = (Object.values(person));

// for (x of personArray) {
//     console.log(x);
// }


// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// console.log(JSON.stringify(person));






// const person = {
//     name: "John",
//     today: new Date()
// };

// let myString = JSON.stringify(person);

// console.log(myString);






// const person = {
//     name: "John",
//     age: function () { return 30; }
// };

// let myString = JSON.stringify(person);

// console.log(myString);





// const person = {
//     name: "John",
//     age: function () { return 30; }
// };
// person.age = person.age.toString();

// let myString = JSON.stringify(person);

// console.log(myString);






const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);

console.log(myString);