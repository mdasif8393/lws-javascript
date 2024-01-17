// var num1 = 2;

// var sum = function () {
//     var num2 = 3;
//     var num = 6;
//     return function () {
//         return num;
//     }
// }

// var myFunc = sum();
// console.dir(myFunc);






// function bankAccount(initialBalance) {
//     var balance = initialBalance;
//     return function () {
//         return balance;
//     }
// }

// var account = bankAccount(100000);

// console.dir(account);



// (function () {
//     var num1 = 2;
//     var num2 = 3;

//     var sum = function () {
//         return num1 + num2;
//     }

//     console.log(sum());
//     console.dir(sum);

//     num1 = 6;
//     num2 = 7;

//     console.log(sum());
//     console.dir(sum);
// })()



// (function () {
//     var num1 = 2;

//     var sum = function () {
//         var num2 = 3;
//         return num1 + num2;
//     }

//     console.dir(sum);
// })();



// (function () {
//     let num1 = 2;
//     let num2 = 3;

//     var sum = function () {
//         return num1 + num2;
//     }

//     console.dir(sum);
// })();





// function stopWatch() {
//     var startTime = Date.now();

//     function getDelay() {
//         console.log(Date.now() - startTime);
//     }
//     return getDelay;
// }

// var timer = stopWatch();

// for (var i = 0; i < 10000000; i++) {
//     var a = Math.random() * 1000000;
// }

// timer();
// console.dir(timer);
// timer = null;



// var a;

// function async() {
//     a = 20;

//     var myFunc = () => {
//         console.log(a);
//     }

//     setTimeout(myFunc, 3000);

//     console.dir(myFunc)
// }

// async();

// a = 30;





// function apiFunction(url) {
//     fetch(url)
//         .then((res) => {
//             console.log(res);
//         })
// }

// apiFunction('https://jsonplaceholder.typicode.com/todos/1');

// console.log("I am here");