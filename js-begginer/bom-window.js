// select dom element

const width = document.getElementById('width');
const height = document.getElementById('height');



// show window object properties
width.innerHTML = "Window inner width is: " + window.innerWidth;
height.innerHTML = "Window inner Height is: " + window.innerHeight;

let myWindow;

function openWindow() {
    myWindow = window.open("https://www.google.com/")
}

function closeWindow() {
    myWindow.close();
}