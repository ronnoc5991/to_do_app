import project from "./create-project-object.js"
import populateRightSideContent from "./rightSideContentDOM.js"
import populateNavBar from "./leftNavBarDOM.js"

const projectsNavBar = document.getElementById("projectsNavBar");
const projectItems = document.getElementById("projectViewerItems");

projectsNavBar.addEventListener("click", event =>  { //adds event isteners to the Project Display List
    if (event.target.className === "project"){
        toggleActiveProject(event.target.dataset.index);
    } else if (event.target.className === "deleteProjectButton"){
        deleteProject(event.target.dataset.index);
    }
});

projectItems.addEventListener("click", event => {
    if(event.target.className === "deleteItemDiv"){
        console.log("Holy Shit it worked")
        console.log(event.target.dataset.index);
        deleteItem(event.target.dataset.index);
    }
})


const projectsLibrary = [];

function createProject(title, description) { //creates project... populates left bar... makes new project active and displays it
    const newProject = project(title, description)
    projectsLibrary.push(newProject);
    populateNavBar(projectsLibrary);
    var projectList = document.querySelectorAll('.project');
    projectList[(projectsLibrary.length - 1)].dataset.active = "yes";
    loadRightSideDisplay();
}

//still need to make forms for new projects/to do items

function deleteProject(index) {
    projectsLibrary.splice(index, 1);
    populateNavBar(projectsLibrary);
    loadRightSideDisplay();
}

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
            }
        }
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



function deleteItem(index) {  //get active project from left nav bar search and call delete Item function on that indexed project in projectlibrary
    var projects = document.querySelectorAll('.project');
    var i;
    for (i=0; i < projects.length; ++i) { //which one is active?
        if (projects[i].dataset.active == "yes") {
            projectsLibrary[i].destroyItem(index);
        }
    }
    loadRightSideDisplay();
}

const newProjectButton = document.getElementById("newProjectButton");
newProjectButton.addEventListener("click", newProject)

function newProject() {
    createProject("Number 2", "Test Text");
}



//--------------------------------------------------------Dumby Information----------------------------------------------------------------------
createProject("Vacation to Sicily", "We would like to go to Sicily sometime in the next year");

projectsLibrary[0].createNewItem("Find a cheap Flight", "This is the first to do item of this project", "Due when I feel like it");
loadRightSideDisplay();

projectsLibrary[0].createNewItem("Book some Hotels", "This is the second to do item of this project", "When I feel like it");
loadRightSideDisplay();
//-----------------------------------------------------------------------------------------------------------------------------------------------