// const a = {
//     firstName: "Asif",
//     sleep: function () {
//         console.log(`${this.firstName} is Sleeping`);
//     }
// }

// a.sleep();


// window{ // here this is window
//     function sleep() {
//         console.log("I am sleeping");
//     }
// }

// window.sleep();




// //call()
// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }

// // This will return "John Doe":
// const name = person.fullName.call(person1);
// console.log(name);







// const person = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + ", " + city + ", " + country;
//     }
// }

// const person1 = {
//     firstName: "Asif",
//     lastName: "zaman"
// }

// console.log(person.fullName.call(person1, "Dhaka", "Bangladesh"));