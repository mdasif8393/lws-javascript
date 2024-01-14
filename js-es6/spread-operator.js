const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers);
console.log(numbers);


var myObj1 = {
    x: 1,
    y: 2
}

var myObj2 = {
    a: 1,
    b: 2
}

console.log({
    ...myObj1, ...myObj2
});