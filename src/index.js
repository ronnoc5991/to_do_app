import project from "./create-project-object.js"
import populateRightSideContent from "./rightSideContentDOM.js"
import populateNavBar from "./leftNavBarDOM.js"


//--------------Definitions and Event Listeners------------------------------------------------------------------
const projectsNavBar = document.getElementById("projectsNavBar");
const projectItems = document.getElementById("projectViewerItems");
const newProjectButton = document.getElementById("newProjectButton").addEventListener("click", newProject);
const newItemButton = document.getElementById("newItemButton").addEventListener("click", createToDo);

projectsNavBar.addEventListener("click", event =>  { //adds EventListeners to Projects Display List
    if (event.target.className === "project"){
        toggleActiveProject(event.target.dataset.index);
    } else if (event.target.className === "deleteProjectButton"){
        deleteProject(event.target.dataset.index);
    }
});

projectItems.addEventListener("click", event => { //adds EventListeners to each ToDo Item in a project
    if(event.target.className === "deleteItemDiv"){
        deleteToDo(event.target.dataset.index);
    }
})
const projectsLibrary = [];
//---------------------------------------------------------------------------------------------------------------


function newProject() { //this will be replaced with form data pull
    createProject("Number 2", "Test Text");
}

function createProject(title, description) { //creates project... populates left bar... makes new project active and displays it
    const newProject = project(title, description)
    projectsLibrary.push(newProject);
    populateNavBar(projectsLibrary);
    var projectList = document.querySelectorAll('.project');
    projectList[(projectsLibrary.length - 1)].dataset.active = "yes"; //makes newest Project the Active Project
    loadRightSideDisplay();
}

function deleteProject(index) {
    var projects = document.querySelectorAll('.project');
    if (projects[index].dataset.active == "yes") {
        projectsLibrary.splice(index, 1); //remove it
        populateNavBar(projectsLibrary); //reset left Display
        projects = document.querySelectorAll('.project');
        if (projects.length > 0) {
            projects[0].dataset.active = "yes";
        }
    } else {
        projectsLibrary.splice(index, 1);
        populateNavBar(projectsLibrary);
    }
    loadRightSideDisplay(); 
}

function createToDo() {
    var projects = document.querySelectorAll('.project');
    var i;
    for (i=0; i < projects.length; ++i) { //which one is active?
        if (projects[i].dataset.active == "yes") {
            projectsLibrary[i].createNewItem("DUDE", "Awesome", "NOw");
        }
    }
    loadRightSideDisplay();
}

function deleteToDo(index) {  //get active project from left nav bar search and call delete Item function on that indexed project in projectlibrary
    var projects = document.querySelectorAll('.project');
    var i;
    for (i=0; i < projects.length; ++i) { //which one is active?
        if (projects[i].dataset.active == "yes") {
            projectsLibrary[i].destroyItem(index);
        }
    }
    loadRightSideDisplay();
}


//still need to make forms for new projects/to do items

function loadRightSideDisplay() {
    var projects = document.querySelectorAll('.project');
    var i;
    if (projects.length > 0){
        for (i=0; i < projects.length; ++i) {
            if (projects.length == 1) {
                projects[0].dataset.active = "yes";
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
        const itemDisplay = document.getElementById("projectViewerItems");
            while(itemDisplay.hasChildNodes()) {
            itemDisplay.removeChild(itemDisplay.firstChild);
        }


    }
}

function toggleActiveProject(index) {  //successfully toggles actice Project based on click event
    const currentProjects = document.querySelectorAll('.project');
    var i;
    for (i=0; i<currentProjects.length; ++i) {
        currentProjects[i].dataset.active = "no";
    }
    currentProjects[index].dataset.active = "yes";
    loadRightSideDisplay();
    }

//--------------------------------------------------------Dumby Information----------------------------------------------------------------------
createProject("Vacation to Sicily", "We would like to go to Sicily sometime in the next year");

projectsLibrary[0].createNewItem("Find a cheap Flight", "This is the first to do item of this project", "Due when I feel like it");
loadRightSideDisplay();

projectsLibrary[0].createNewItem("Book some Hotels", "This is the second to do item of this project", "When I feel like it");
loadRightSideDisplay();
//-----------------------------------------------------------------------------------------------------------------------------------------------