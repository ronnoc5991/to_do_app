//Factory Function to create To Do Items

//this is to be pulled from a form on the DOM

//associate items with projects

const todoItem = (title, description, dueDate, notes, priority, project) => {
    return {title, description, dueDate, notes, priority, project};
}


export default todoItem;