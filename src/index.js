import project from "./create-project-object.js"
import manageDOM from "./project-DOM-manager.js"
import projectsNavBar from "./project-nav-bar.js"

var projectsLibrary = []; //projects will be stored here
var projectCount = 0;


//create new Project on button click
//push that project into the projectsLibrary
//update Displays?


//this is the dispatch
//Events happen here and dispatch the work to modules
//need both DOM modules and application modules

var newProject = project("Vacation to Sicily", "We would like to go to Sicily sometime in the next year");
console.log(newProject);
projectsLibrary.push(newProject);

newProject.createNewItem("Find a cheap Flight", "This is the first to do item of this project", "Due when I feel like it");
console.log(newProject);

newProject.createNewItem("Book some Hotels", "This is the second to do item of this project", "When I feel like it");
console.log(newProject);


const rightSideContainer = document.getElementById("rightSideContainer");

rightSideContainer.appendChild(manageDOM(newProject));

const leftNavBar = document.getElementById("leftNavBar");
leftNavBar.appendChild(projectsNavBar(projectsLibrary));