import project from "./create-project-object.js"
import populateRightSideContent from "./rightSideContentDOM.js"
import populateNavBar from "./leftNavBarDOM.js"
import { formatDistance, endOfDay } from 'date-fns'


//--------------Definitions and Event Listeners------------------------------------------------------------------
const projectsNavBar = document.getElementById("projectsNavBar");
const projectItems = document.getElementById("projectViewerItems");

const projectForm = document.getElementById('projectForm')
projectForm.onsubmit = function(e) {pullProjectInfoFromForm(e)};

const toDoForm = document.getElementById('itemForm');
toDoForm.onsubmit = function(e) {pullToDoInfoFromForm(e)};

projectsNavBar.addEventListener("click", event =>  { //adds EventListeners to Projects Display List
    if (event.target.className === "project"){
        toggleActiveProject(event.target.dataset.index);
    } else if (event.target.className === "deleteProjectButton"){
        deleteProject(event.target.dataset.index);
    }
});

projectItems.addEventListener("click", event => { //adds EventListeners to each ToDo Item in a project
    var parentItem = event.target.parentNode
    
    if(event.target.className === "deleteItemDiv"){
        parentItem.classList.add("fall");
        parentItem.addEventListener("transitionend", function(event){
            console.log(event.propertyName);
            console.log("1");
            if(event.propertyName == 'color') {
                deleteToDo(event.target.dataset.index)
            }
    });
    } else if (event.target.className === "moreInfo") {
        var currentCollapsible = event.target.dataset.index;
        var collapsibles = document.querySelectorAll('.collapsible');
        var i;
        for (i=0; i< collapsibles.length; ++i) {
            if (collapsibles[i].dataset.index == currentCollapsible){
                collapsibles[i].classList.toggle('extended');
            }
        }
    } else if (event.target.classList[0] === "itemTitle") { //toggleDoneStatus of Item
        var activeProject = getActiveProject();
        projectsLibrary[activeProject].toggleDoneStatus(parentItem.dataset.index);
        parentItem.classList.toggle("done");
        event.target.classList.toggle("lineThrough");
        saveLocalProjects();
    }
})

const projectsLibrary = [];

//---------------------------------------------------------------------------------------------------------------

function createProject(title, description, date) { //creates project... populates left bar... makes new project active and displays it
    const newProject = project(title, description, date)
    projectsLibrary.push(newProject);
    populateNavBar(projectsLibrary);
    toggleActiveProject(projectsLibrary.length - 1);
    saveLocalProjects();
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
    saveLocalProjects();
}

function createToDo(title, description, date, done) {
    var activeProject = getActiveProject();
    projectsLibrary[activeProject].createNewItem(title, description, date, done);
    updateRightSideDisplay();
    saveLocalProjects();
}

function deleteToDo(index) {  //get active project from left nav bar search and call delete Item function on that indexed project in projectlibrary
    var activeProject = getActiveProject();
    projectsLibrary[activeProject].destroyItem(index);
    updateRightSideDisplay();
    saveLocalProjects();
}

function pullToDoInfoFromForm(e) {
    const wrapper = document.querySelector('.wrapper');
    const form = wrapper.querySelectorAll('.form');
    e.preventDefault();
    var formData = new FormData(form[0]);
    var title = formData.get('toDoTitle')
    var description = formData.get('toDoDescription');
    var date = formData.get('toDoDate');
    createToDo(title, description, date, "no");
    form[0].reset();
}

function pullProjectInfoFromForm(e) {
    const projectForm = document.querySelector('#projectFormContainer');
    const form = projectForm.querySelectorAll('.form');
    e.preventDefault();
    var formData = new FormData(form[0]);
    var projectTitle = formData.get('projectTitle');
    var projectDescription = formData.get('projectDescription');
    if (formData.get('projectDueDate') != "") {
        var projectDate = formData.get('projectDueDate');
    } else {
        var projectDate = "";
    }
    createProject(projectTitle, projectDescription, projectDate);
    form[0].reset();
}

function updateRightSideDisplay() {
    var activeProject = getActiveProject();

    var projects = document.querySelectorAll('.project');

    if (projects.length == 0) {
        const timeDisplay = document.getElementById("projectTimeDisplay");
        const theTitle = document.getElementById("projectName");
            theTitle.innerHTML = "<h1>Create a New Project<h1>";
        const descriptionDiv = document.getElementById("projectViewerDescription");
            descriptionDiv.innerHTML = "<h4>Create a new Project to start being more productive!<h4>";
        const itemDisplay = document.getElementById("injectProjectItemsHere");
            while(itemDisplay.hasChildNodes()) {
            itemDisplay.removeChild(itemDisplay.firstChild);
            } 
    } else {
        populateRightSideContent(projectsLibrary[activeProject]);
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

function getActiveProject(){ //returns index of Active Project in Projects Library
    var currentProjects = document.querySelectorAll('.project');
    var i;
    var activeProject;
    for (i=0; i < currentProjects.length; ++i) { //which one is active?
        if (currentProjects[i].dataset.active == "yes") {
            activeProject = currentProjects[i].dataset.index;
        }
    }
    return activeProject;
}

function startUp () {
    getLocalProjects();
    saveLocalProjects();
    if (projectsLibrary.length > 0) {
        populateNavBar(projectsLibrary);
        toggleActiveProject(0);

    }
    updateRightSideDisplay();
}


function saveLocalProjects(){
    localStorage.setItem('projectsLibrary', JSON.stringify(projectsLibrary)); //copies projectsLibrary to localStorage
}

function getLocalProjects() {
    if(localStorage.getItem('projectsLibrary') === null){
        createProject("Today", "This is a default ToDo List for your day.  Feel free to create a new Project by giving it a title, description and Due Date.", (endOfDay(new Date())));
    }else if (localStorage.getItem('projectsLibrary').length == 0) {
        console.log("Hello");
    } else {
        //set library equal to the localStorage .. this is sloppy.
        //instead... use the local storage to create new projects and items within those projects
        // projectsLibrary = JSON.parse(localStorage.getItem('projectsLibrary'));

        var savedProjects = JSON.parse(localStorage.getItem('projectsLibrary')); //this is an array... loop through each project
        var numberOfProjects = savedProjects.length;
        var i;

        for(i=0; i<numberOfProjects; ++i){
            createProject(savedProjects[i].title, savedProjects[i].description, savedProjects[i].date);
                if (savedProjects[i].toDos != []){
                    var savedToDoItems = savedProjects[i].toDos
                    var numberOfToDos = savedToDoItems.length
                    var y;
                    for (y=0; y<numberOfToDos; ++y){
                        projectsLibrary[i].createNewItem(savedToDoItems[y].title, savedToDoItems[y].description, savedToDoItems[y].dueDate, savedToDoItems[y].done);
                    }
                }
        }
    }
}


//----------------------------------------------------------------------------------------------
startUp();

//should the new project and new to do item forms be hidden until called upon?  could include cool roll out animation