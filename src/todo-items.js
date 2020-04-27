//Factory Function to create To Do Items

const todoItem = (title="", description="", dueDate="none", notes="none", priority="none", project="none") => {
    return {title, description, dueDate, notes, priority, project};
}


export default todoItem;