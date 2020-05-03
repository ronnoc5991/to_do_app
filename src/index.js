import project from "./create-project-object.js"
import populateRightSideContent from "./rightSideContentDOM.js"
import populateNavBar from "./leftNavBarDOM.js"
import createToDoForm from "./toDoForm.js"


//--------------Definitions and Event Listeners------------------------------------------------------------------
const projectsNavBar = document.getElementById("projectsNavBar");
const projectItems = document.getElementById("projectViewerItems");
const newToDoButton = document.getElementById("submit").addEventListener("click", pullToDoInfoFromForm);
const createProjectButton = document.getElementById("submitProject").addEventListener("click", pullProjectInfoFromForm);

projectsNavBar.addEventListener("click", event =>  { //adds EventListeners to Projects Display List
    if (event.target.className === "project"){
        toggleActiveProject(event.target.dataset.index);
    } else if (event.target.className === "deleteProjectButton"){
        deleteProject(event.target.dataset.index);
    }
});

projectItems.addEventListener("click", event => { //adds EventListeners to each ToDo Item in a project
    var parentItem = event.target.parentNode
    var projects = document.querySelectorAll('.project');
    var i;
    
    if(event.target.className === "deleteItemDiv"){
        deleteToDo(event.target.dataset.index);
    } else if (event.target.className === "moreInfo") {
        //open the collapsible of this item to show description
    } else if (event.target.className === "itemTitle") {
        
        if (parentItem.className == "item"){
            parentItem.className += " done";
            for (i=0; i < projects.length; ++i) { //which one is active?
                if (projects[i].dataset.active == "yes") {
                    projectsLibrary[i].toDos[(parentItem.dataset.index)].done = "yes"  //need a toggle Done status function... should this be in the project object?  I think so
                }
            }
        } else if (parentItem.className == "item done") {
            parentItem.className = "item";
            for (i=0; i < projects.length; ++i) { //which one is active?
                if (projects[i].dataset.active == "yes") {
                    projectsLibrary[i].toDos[(parentItem.dataset.index)].done = "no"
                }
            }
        }
        
        // event.target.className += " lineThrough"; //this should be made permanent somehow... this clears on new load of right display

    }
})

const projectsLibrary = [];
//---------------------------------------------------------------------------------------------------------------

function createProject(title, description) { //creates project... populates left bar... makes new project active and displays it
    const newProject = project(title, description)
    projectsLibrary.push(newProject);
    populateNavBar(projectsLibrary);
    toggleActiveProject(projectsLibrary.length - 1);
}

function deleteProject(index) {
    var projects = document.querySelectorAll('.project');
    toggleActiveProject(index);
    projectsLibrary.splice(index, 1); //remove Project from Library
    populateNavBar(projectsLibrary); //update the Projects List Display
    projects = document.querySelectorAll('.project');
    if (projects.length > 0) { //set the first Project to active
        toggleActiveProject(0);
    }
    updateRightSideDisplay(); 
}

function createToDo(title, description, date) {
    var projects = document.querySelectorAll('.project');
    var i;
    for (i=0; i < projects.length; ++i) { //which one is active?
        if (projects[i].dataset.active == "yes") {
            projectsLibrary[i].createNewItem(title, description, date, "no");
        }
    }
    updateRightSideDisplay();
}

function deleteToDo(index) {  //get active project from left nav bar search and call delete Item function on that indexed project in projectlibrary
    var projects = document.querySelectorAll('.project');
    var i;
    for (i=0; i < projects.length; ++i) { //which one is active?
        if (projects[i].dataset.active == "yes") {
            projectsLibrary[i].destroyItem(index);
        }
    }
    updateRightSideDisplay();
}

function pullToDoInfoFromForm(e) {
    const wrapper = document.querySelector('.wrapper');
    const form = wrapper.querySelectorAll('.form');
    // const submitInput = form[0].querySelector('input[type="submit"]');
    e.preventDefault();
    var formData = new FormData(form[0]);
    var title = formData.get('toDoTitle')
    var description = formData.get('toDoDescription');
    var date = formData.get('toDoDate');
    createToDo(title, description, date, "no");

    form[0].reset();
}

function pullProjectInfoFromForm(e) { ////////////////////----------------button is added... combine this button with the other new project button and include create project call in this function
    const projectForm = document.querySelector('#projectFormContainer');
    const form = projectForm.querySelectorAll('.form');
    e.preventDefault();
    var formData = new FormData(form[0]);
    var projectTitle = formData.get('projectTitle');
    createProject(projectTitle, "Dumby Description Text");
    form[0].reset();
}

function updateRightSideDisplay() {
    var projects = document.querySelectorAll('.project');
    var i;
    if (projects.length > 0){
        for (i=0; i < projects.length; ++i) {
            if (projects.length == 1) {
                populateRightSideContent(projectsLibrary[0]);
            } else if (projects[i].dataset.active == "yes") {
                populateRightSideContent(projectsLibrary[i]);
            }}
        } else {
        const timeDisplay = document.getElementById("projectTimeDisplay");
            timeDisplay.innerHTML = "<h1>O<h1>";
        const theTitle = document.getElementById("projectName");
            theTitle.innerHTML = "<h1>Create a New Project<h1>";
        const descriptionDiv = document.getElementById("projectViewerDescription");
            descriptionDiv.innerHTML = "<h4>Create a new Project and start being more productive!<h4>";
        const itemDisplay = document.getElementById("injectProjectItemsHere");
            while(itemDisplay.hasChildNodes()) {
            itemDisplay.removeChild(itemDisplay.firstChild);
        }


    }
}

function toggleActiveProject(index) {  //successfully toggles active Project based on click event
    const currentProjects = document.querySelectorAll('.project');
    var i;
    for (i=0; i<currentProjects.length; ++i) {
        currentProjects[i].dataset.active = "no";
        currentProjects[i].className = "project";
    }
    currentProjects[index].dataset.active = "yes";
    currentProjects[index].className += " active";

    updateRightSideDisplay();
    }

//----------------------------------------------------------------------------------------------
updateRightSideDisplay();
