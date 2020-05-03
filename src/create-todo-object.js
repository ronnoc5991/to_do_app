//Factory Function to create To Do Items

const todoItem = (title="", description="", dueDate="", done="no") => {
    return {title, description, dueDate, done};
}

export default todoItem;