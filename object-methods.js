const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};

person.fullName = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();;
}

console.log(person.fullName());

