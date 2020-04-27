import todoItem from './todo-items.js'
import generateDomItem from './todo-item-dom-generator.js'


document.getElementById("newItemButton").addEventListener("click", createNewItem);


var listItems = [];
var itemIndex = 0;


function createNewItem() { //get info from form...create DOM element and Object
    var form = document.getElementById("itemForm"); //get inputs from the form
    var title = getTitle(form);
    var description = getDescription(form);
    
    var uniqueID = `index${itemIndex}` //to be used for deleting later... there is a better way... using data attributes and also storing them in the object?
    var newDOMItem = generateDomItem(uniqueID, title, description);
    document.getElementById('lowerDisplay').appendChild(newDOMItem);

    var item = todoItem(title, description,);
    listItems.push(item);


    form.reset();
    ++itemIndex;
}

function getTitle(form){
    var title = form.elements[0].value;
    return title;
}

function getDescription(form){
    var description = form.elements[1].value;
    return description;
}