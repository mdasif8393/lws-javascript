function log(anything) {
    console.log(anything);
}

//// Sets
// let mySet = new Set();

// mySet.add(5).add(6).add("Bangladesh")
// mySet.add("Bangladesh")
// mySet.delete("Bangladesh")
// mySet.clear()
// log(mySet.has(5))
// log(mySet.size)
// log(mySet);

// let myArray = [1, 2, 3];

// let mySet = new Set("Bangladesh");

// for (let value of mySet) {
//     log(value);
// }

// log(mySet);


//// sets to array convert
// let myArray = [1, 2, 3];

// let mySet = new Set(myArray);

// log([...mySet])
// log(Array.from(mySet));

////set usages
// set to array
// let myArray = [1, 2, 3, 3, 5, 2, 4];
// let mySet = new Set(myArray);
// log([...mySet]);


let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
// log(union);

let intersection = new Set([...a].filter(x => b.has(x)));
// console.log(intersection);

////set difference

let difference = new Set([...a].filter(x => !b.has(x)));
// console.log(difference);



// WeakSet
// const ws = new WeakSet([{ a: 1 }, { b: 2 }]);
// ws.add({ a: 1 })
// console.log(ws);