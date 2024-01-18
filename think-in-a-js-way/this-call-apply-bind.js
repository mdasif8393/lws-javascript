// implicit binding
// explicit binding (call, apply, bing)
// new binding
// window binding




// implicit binding

// var sakib = {
//     name: "sakib",
//     age: 35,
//     printPlayerName: function () {
//         console.log(this.name);
//     }
// }

// sakib.printPlayerName();





// var printPlayerNameFunction = function (obj) {
//     obj.printPlayerName = function () {
//         console.log(this.name);
//     }
// }

// var sakib = {
//     name: "sakib",
//     age: 35,
// }

// var tamim = {
//     name: "Tamim",
//     age: 35,
// }

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();





// var Person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () {
//             console.log(this.name);
//         },
//         father: {
//             name: 'Mr. x',
//             printName: function () {
//                 console.log(this.name);
//             }
//         }
//     }

// }

// var sakib = Person("Sakib", 34);
// sakib.printName();
// sakib.father.printName();



// explicit binding (call)

// var printName = function (v1, v2, v3) {
//     console.log(`${this.name} is ${v1} ${v2} and ${v3}`);
// }

// var sakib = {
//     name: "sakib",
//     age: 35,
// }

// var v1 = "HandSome";
// var v2 = "All Rounder";
// var v3 = "Best Player";

// printName.call(sakib, v1, v2, v3);





// explicit binding (apply)

// var printName = function (v1, v2, v3) {
//     console.log(`${this.name} is ${v1} ${v2} and ${v3}`);
// }

// var sakib = {
//     name: "sakib",
//     age: 35,
// }

// var v1 = "HandSome";
// var v2 = "All Rounder";
// var v3 = "Best Player";

// var v = [v1, v2, v3];

// printName.apply(sakib, v);




// explicit binding (bind)
// var printName = function (v1, v2, v3) {
//     console.log(`${this.name} is ${v1} ${v2} and ${v3}`);
// }

// var sakib = {
//     name: "sakib",
//     age: 35,
// }

// var v1 = "HandSome";
// var v2 = "All Rounder";
// var v3 = "Best Player";

// var newFunc = printName.bind(sakib, v1, v2, v3);
// newFunc();




// new binding

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(`${name} is ${age} years old`);
// }


// var sakib = new Person("Sakib", 35)





// window binding

// var printName = function () {
//     console.log(window === this);
//     console.log(this.name); // undefined
// }

// var sakib = {
//     name: "Sakib"
// }

// printName()