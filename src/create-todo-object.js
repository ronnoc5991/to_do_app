//Factory Function to create To Do Items

const todoItem = (title="", description="", dueDate="") => {
    return {title, description, dueDate};
}

export default todoItem;