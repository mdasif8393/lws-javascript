// let headerElement = document.getElementById("header");
// headerElement.style.borderBottom = "3px solid red"
// headerElement.style.fontSize = "30px";

// console.dir(document)

// console.log(document.getElementsByClassName("item")[0]);

// let itemUl = document.getElementById("items");
// const items = itemUl.getElementsByClassName("item");
// for (let i = 0; i < items.length; i++) {
//     items[i].style.color = "red";
// };


// let items = document.getElementsByTagName("img");
// console.log(items);


// Query Selector
// let header = document.querySelector("#new-task");
// console.log(header.textContent);

// let newTask = document.querySelector("#new-task");
// console.log(newTask);

// const lastItem = document.querySelector(".item:last-child");
// lastItem.style.color = "red";

// const lastItems = document.querySelectorAll(".item:last-child");
// for (let element of lastItems) {
//     element.style.color = "red";
// }

// const lastItem = document.querySelector(".item:nth-child(2)");
// lastItem.style.color = "red";

// const lastItem = document.querySelector("#items").querySelector(".item:nth-child(2)");
// lastItem.style.color = "red";






//DOM Hierarch
// const grandParent = document.querySelector(".todo-list")
// // const parent = grandParent.children;
// const children = grandParent.querySelectorAll(".item");
// console.log(children);


// const children = document.querySelector(".item");
// // const parent = children.parentElement;
// // console.log(parent);

// const grandParent = children.closest(".todo-list");
// console.log(grandParent);



// const childrenTwo = document.querySelector('.item').nextElementSibling;
// const childrenOne = childrenTwo.previousElementSibling;
// childrenOne.style.color = "red";