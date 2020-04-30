import todoItem from './create-todo-object.js'

const project = (title, description) => {


    const toDos = [];

    const createNewItem = (title, description, dueDate) => {
        var newToDo = todoItem(title, description, dueDate);
        toDos.push(newToDo);
    }

    const destroyItem = (itemIndex) => {
        toDos.splice(itemIndex, 1);
    }

    return {title, description, toDos, createNewItem, destroyItem};
}

export default project