
var num1 = 2;

var sum = function () {
    var num2 = 3;
    var num = 6;
    return function () {
        return num;
    }
}

var myFunc = sum();
console.dir(myFunc);






// function bankAccount(initialBalance) {
//     var balance = initialBalance;
//     return function () {
//         return balance;
//     }
// }

// var account = bankAccount(100000);

// console.dir(account);