//// globalThis
// globalThis.setTimeout(() => console.log("Hello"), 100);




////BigInt

// let largest_number = Number.MAX_SAFE_INTEGER;
// largest_number += 1;
// largest_number = BigInt(largest_number) + 1n;
// console.log(largest_number);


////optional chaining
// let colors = ['red', 'green', 'blue',];
// console.log(colors?.[1]);



//// nullish coalescing operator
// let language;
// console.log(language ?? "JavaScript");


////Dynamic Import
(async function () {
    const { add } = await import('./utlis.js');
    const { remove } = await import("./utlis.js");
    add();
    remove();
})();

import("./utlis.js")
    .then(({ add, remove }) => {
        add();
        remove();
    });

////Promise All Settled()
