//Factory Function to create To Do Items

const todoItem = (title="", description="", dueDate="") => {
    return {title, description, dueDate};
}

//this should be called from the current project and stored in that object

export default todoItem;