"use strict"
// var x = 23;

function myFunc() {
    x = 10;
    console.log(`${x} from function`);
}
myFunc();
console.log(window.x);