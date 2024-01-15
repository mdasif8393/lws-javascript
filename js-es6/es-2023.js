//// array reverse
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.toReversed());


//// array to splice
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const removedElement = (arr.toSpliced(2, 2, 33, 44, 55));
// console.log(removedElement);
// console.log(arr);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = arr.with(1, 400);
// console.log(result);


//// toSorted()
// - means small
// + means big
// 0 means nothing
// const arr = [1, 2, 3, 4, 5, 6, 7, 11, 33, 22, 8, 9];
// console.log(arr.toSorted((a, b) => b - a));


const cars = [
    {
        type: "vOLVO", year: 2016
    },
    {
        type: "Bmw", year: 2010
    },
    {
        type: "sAAB", year: 2001
    },

]

const result = cars.toSorted(function (a, b) {
    const x = a.type.toLocaleLowerCase()
    const y = b.type.toLocaleLowerCase()

    if (x < y) {
        return -1
    }
    else if (x > y) {
        return 1
    }
    else {
        return 0
    }
})

console.log(result);
console.log(cars);