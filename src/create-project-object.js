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

    const toggleDoneStatus = (index) => {
        if (toDos[index].done == "no") {
            //change it to yes
            toDos[index].done = "yes";
        } else {
            //change it to NO
            toDos[index].done = "no";
        }
    }

    return {title, description, toDos, createNewItem, destroyItem, toggleDoneStatus};
}

export default project