const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
    window.alert("Hello World")
}

function showConfirm() {
    let text;
    if (window.confirm("Press a button")) {
        text = "You pressed ok!"
    }
    else {
        text = "You pressed cancel"
    }
    confirm.innerHTML = text;
}


function showPrompt() {
    const person = window.prompt("Please enter your name:", "Happy potter");
    let text;
    if (person === null || "") {
        text = "User cancelled the prompt"
    }
    else {
        text = person;
    }
    prompt.innerHTML = text;
}