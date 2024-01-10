const status = true;

console.log("Task 1");

// promise definition
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (status) {
            resolve("Task 2");
        }
        else {
            reject("failed");
        }
    }, 2000);
});

// promise call
promise
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })

console.log("Task 3");








const paymentSuccess = true;
const marks = 90;

function enroll() {
    console.log("Course enrollment is in progress");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve()
            }
            else {
                reject("Payment failed");
            }
        }, 2000)
    });

    return promise;
}

function progress() {
    console.log("Course on progress");

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks > 80) {
                resolve()
            }
            else {
                reject("You could not get enough marks to get the certificate");
            }
        }, 2000)
    });

    return promise;
}


function getCertificate() {
    console.log("Preparing your certificate!");

    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Congratulations! Your certificate is ready");
        }, 1000)
    })

    return promise;
}


enroll()
    .then(progress)
    .then(getCertificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log(err);
    })