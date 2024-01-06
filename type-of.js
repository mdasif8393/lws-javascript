
function isArray(myArray) {
    console.log(myArray.constructor.toString().indexOf("Array") > -1);
}

(isArray([1, 2, 4, 6]));