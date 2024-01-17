var varVariable = "This is var"
console.log(varVariable);

if (true) {
    var varVariable = "This is var again"
}

console.log(varVariable);

if (true) {
    let letVariable = "This is let";
    letVariable = "This is let variable";
    console.log(letVariable);
}

if (true) {
    const constVariable = {
        name: "javascript",
        age: 36,
    }
    constVariable.name = "JS"
    console.log(constVariable);
}

