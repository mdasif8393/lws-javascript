const timeout = document.getElementById("timeout");
const interval = document.getElementById("interval");

let timeOutInstance;

function startTimeout() {
    timeOutInstance = setTimeout(() => {
        timeout.innerHTML = "3 seconds over!"
    }, 3000);
}

function stopTimeout() {
    clearTimeout(timeOutInstance);
}

let intervalInstance;

function startInterval() {
    intervalInstance = setInterval(() => {
        interval.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
}

function stoptInterval() {
    clearInterval(intervalInstance);
}