class Person {
    constructor(name, age) {
        this.name = name; // property
        this.age = age;
    }
    // eat() { // method
    //     console.log(`${this.name} is eating`);
    // }

    play() {
        console.log(`${this.name} is playing`);
    }

    // get getName() { // getter
    //     return this.name;
    // }

    // set setName(name) { // setter
    //     this.name = name
    // }

    // static isEqualAge(cricketer1, cricketer2) {
    //     return cricketer1.age === cricketer2.age;
    // }
}

class cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age);
        this.type = type;
        this.country = country;
    }
    play() {
        super.play();
        console.log(`${this.name} is playing cricket`);
    }
}


let sakib = new cricketer("sakib", 35, "All Rounder", "Bangladesh");
let tamim = new Person("Tamim", 36);

sakib.play();


// console.log(sakib.getName);
// sakib.setName = "Asif";
// console.log(Person.isEqualAge(sakib, tamim));


