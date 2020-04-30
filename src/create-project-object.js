import todoItem from './create-todo-object.js'
import populateRightSideContent from './rightSideContentDOM.js';

const project = (title, description) => {


    const toDos = [];

    const createNewItem = (title, description, dueDate) => {
        var newToDo = todoItem(title, description, dueDate);
        toDos.push(newToDo);
    }

    const destroyItem = (itemIndex) => {
        console.log("destroy");
        console.log(itemIndex);
        console.log(toDos);
        toDos.splice(itemIndex, 1);
        console.log(toDos);
    }

    return {title, description, toDos, createNewItem, destroyItem};
}

export default project