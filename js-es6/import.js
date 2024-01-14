// import { pi as varA, a as varPi } from './export.js' // named import
// console.log(varA, varPi);


// import * as test from './export.js'
// console.log(test);

import external, { pi, myFunc } from './export.js'
console.log(external, pi,);

myFunc();