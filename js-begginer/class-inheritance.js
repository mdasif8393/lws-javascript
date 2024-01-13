// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");

// console.log(myCar.show());


////getter
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     get cnam() {
//         return this.carname;
//     }
//     set cnam(x) {
//         this.carname = x;
//     }
// }

// const myCar = new Car("Ford");

// console.log(myCar.carname);






////setter
class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

const myCar = new Car("Ford");
myCar.carname = "Volvo";

