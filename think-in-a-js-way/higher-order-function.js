// example 1 with higherr order function

// var numbers = [1, 2, 3];

// var result = numbers.map(number => number * 2);

// console.log(result);
// console.log(numbers);



// custom map function create

const languages = ["Java", "JavaScript", "Php", "C"];

function mapSumit(arr, fn) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }

    return newArray;
}

const myArray = mapSumit(languages, function (language) {
    return language.length;
})

console.log(myArray);