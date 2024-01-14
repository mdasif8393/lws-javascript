const user = {
    id: 339,
    name: "Sakib",
    age: 35,
    education: {
        degree: "Masters",
    }
};

const { name: title } = user;

console.log(title);

// Nested
const { education: { degree } = {} } = user;
console.log(degree);








// array destructure
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers1 = [1, 2, [333, 444, 55, 66], 7, 8, 9];

const [, a, , , b] = numbers;
const [, , [, x, , y]] = numbers1;

console.log(a, b);
console.log(x, y);





