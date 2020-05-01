const populateNavBar = (projectsLibrary) => {

    const projectsNavBar = document.getElementById("projectsNavBar"); //remove old Projects
    while (projectsNavBar.hasChildNodes()){
        projectsNavBar.removeChild(projectsNavBar.firstChild);
    }

    var i;

    for (i = 0; i < projectsLibrary.length; ++i) { //add New Projects
        const projectElement = document.createElement('div');
            projectElement.className = "project";
            projectElement.dataset.active = "no";
            projectElement.dataset.index = `${i}`;
        const timeDisplay = document.createElement('div');
            timeDisplay.className = "projectTimeDisplay";
            timeDisplay.innerHTML = "<h3>O<h3>"
        const projectTitle = document.createElement('div');
            projectTitle.className = "projectName";
            projectTitle.innerHTML = `<h3>${projectsLibrary[i].title}<h3>`;
        const deleteProjectButton = document.createElement('div');
            deleteProjectButton.className = "deleteProjectButton";
            deleteProjectButton.dataset.index = `${i}`;
        projectElement.appendChild(deleteProjectButton);
        projectElement.appendChild(timeDisplay);
        projectElement.appendChild(projectTitle);
        projectsNavBar.appendChild(projectElement);
    }
}

export default populateNavBar


//module that updates and controls the navigation bar