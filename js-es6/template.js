var a = 5;
var b = 6;

console.log(`I am ${a + b} and ${a - b}`);



// Tagged Template Literals
var player1 = "Sakib";
var player2 = "Tamim";

function modifier(strings, ...values) {
    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr. " + values.shift() : "")
    }, "");
    return m;
}

console.log(modifier`We have ${player1} and ${player2} in our team`);