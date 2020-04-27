import todoItem from './todo-items.js'
import generateDomItem from './todo-item-dom-generator.js'

console.log("It is working, yo!");

const todo1 = todoItem("Yo", "YoYo", "none", "no notes yo", "none", "project 1");


document.getElementById("newItem").addEventListener("click", newItem);

function newItem() {
    var newDivs = generateDomItem();
    document.getElementById('lowerDisplay').appendChild(newDivs);
}

console.log(todo1);