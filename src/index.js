import todoItem from './todo-items.js'
import generateDomItem from './todo-item-dom-generator.js'
import project from "./project.js"

document.getElementById("newProjectButton").addEventListener("click", createNewProject);

const lowerContainer = document.getElementById('lowerContainer');

var projectArray = [];
var projectCount = 0;

function createNewProject(name) {
    const projectDisplay = document.createElement('div');
    projectDisplay.className = "lowerDisplay";
    projectDisplay.id = `project${projectCount}`;
    clearLowerContainer();
    lowerContainer.appendChild(projectDisplay);
    const newProject = project(name);
    projectArray.push(newProject);
    console.log(projectArray);
    ++projectCount;
    populateProjectListDisplay();
}

function clearLowerContainer() {
    while (lowerContainer.hasChildNodes()) {
        lowerContainer.removeChild(lowerContainer.firstChild);
    }
}

const projectsDisplay = document.getElementById('projectSpace');

function populateProjectListDisplay() {
    var i;
    for (i=0; i<projectArray.length; ++i){
        var newDiv = document.createElement("div");
        newDiv.className = "projectListItem";
        var divText = document.createElement('div');
        divText.innerHTML = `${projectArray[i]["name"]}`
        newDiv.appendChild(divText);
        projectsDisplay.appendChild(newDiv);
    }
}

createNewProject("Hello"); //page starts with a blank project
populateProjectListDisplay();