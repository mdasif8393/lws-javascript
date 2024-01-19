
// last total + current value = current total
// f(n-1) + n = f(n)

function sum(n) {
    if (n === 0) {
        return 0;
    }
    else {
        return sum(n - 1) + n;
    }
}

// console.log(sum(3));





