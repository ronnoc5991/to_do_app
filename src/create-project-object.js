import todoItem from './create-todo-object.js'

//Factory Function to create New Projects

const project = (title, description) => {


    const toDos = [];

    const createNewItem = (title, description, dueDate, done) => {
        var newToDo = todoItem(title, description, dueDate, done);
        toDos.push(newToDo);
    }

    const destroyItem = (itemIndex) => {
        toDos.splice(itemIndex, 1);
    }

    //create function that can toggle the done status of a todo Item given the index of the todo

    return {title, description, toDos, createNewItem, destroyItem};
}

export default project