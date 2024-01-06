// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// const fullName = person.fullName;
// console.log(fullName);





// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     },
//     getFullName: function () {
//         return this.fullName();
//     }
// };
// console.log(person.getFullName());




// //call
// const person1 = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person2 = {
//     firstName: "John",
//     lastName: "Doe",
// }
// console.log(person1.fullName.call(person2));; //here this is person2



// //bind
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const member = {
//     firstName: "Hege",
//     lastName: "Nilsen",
// }

// console.log(person.fullName());
// console.log(person.fullName.bind(member));

