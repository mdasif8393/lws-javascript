// for of

const myObj = {
    name: "Javascript",
    estd: '1995',
    founder: 'Brendan Eich'
}

for (property in myObj) {
    console.log(property, myObj[property]);
}


// for in

const myArray = 'I love javascript';

for (element of myArray) {
    console.log(element);
}