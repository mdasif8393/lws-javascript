////constructor function
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = this.firstName + ' ' + this.lastName;
}

const asif = new Person("Asif", "Zaman", 36);
const asif1 = new Person("Asif1", "Zaman1", 35);
const asif2 = new Person("Asif2", "Zaman2", 33);

asif.country = "Bangladesh";

console.log(asif);
