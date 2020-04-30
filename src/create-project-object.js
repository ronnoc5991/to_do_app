//This is a factory that creates a Project Object
import todoItem from './create-todo-object.js'

const project = (title, description) => {


    var toDos = [];

    const createNewItem = (title, description, dueDate) => {
        var newToDo = todoItem(title, description, dueDate);
        toDos.push(newToDo);
    }

    const destroyItem = () => {
        console.log("destroy")
        //how do I identify the item that needs to be deleted from the array?
        //domID could contain the index of object
        //upon deletion, all DOM objects could have ID's updated starting at 0
        //that is achieved with a for loop
    }

    return {title, description, toDos, createNewItem, destroyItem};
}

export default project