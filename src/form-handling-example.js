import todoItem from './create-todo-object.js'

const project = (name) => {

    var projectItems = [];
    var itemIndex = 0;


    const newItem = (projectItems=[], itemIndex=0) => { //get info from form...create DOM element and Object
        var form = document.getElementById("itemForm"); //get inputs from the form
        var title = retrieveTitle(form);
        var description = retrieveDescription(form);
    
        var uniqueID = `index${itemIndex}` //to be used for deleting later... there is a better way... using data attributes and also storing them in the object?
        var newDOMItem = generateDomItem(uniqueID, title, description);
        document.getElementById('lowerDisplay').appendChild(newDOMItem);

        var item = todoItem(title, description,);
        projectItems.push(item);


        form.reset();
        ++itemIndex;
    }

    const retrieveTitle = (form) => {
        var title = form.elements[0].value;
        return title;
    }

    const retrieveDescription = (form) => {
        var description = form.elements[1].value;
        return description;
    }

    return {name, newItem, projectItems, itemIndex}
}

export default project