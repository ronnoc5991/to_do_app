const projectsNavBar = (arrayOfProjects) => {

    const projectsNavBar = document.createElement('div');
    projectsNavBar.id = "projectsNavBar";

    var arrayOfProjects = arrayOfProjects;
    var i;

    for (i = 0; i < arrayOfProjects.length; ++i) {
        const projectElement = document.createElement('div');
        projectElement.className = "project";
        projectElement.id = `index${i}`;
        const timeDisplay = document.createElement('div');
        timeDisplay.className = "projectTimeDisplay";
        timeDisplay.innerHTML = "<h3>O<h3>"
        const projectTitle = document.createElement('div');
        projectTitle.className = "projectName";
        projectTitle.innerHTML = `<h3>${arrayOfProjects[i].title}<h3>`;
        projectElement.appendChild(timeDisplay);
        projectElement.appendChild(projectTitle);
        projectsNavBar.appendChild(projectElement);
    }

    return projectsNavBar
}

export default projectsNavBar


//module that updates and controls the navigation bar
//needs to send info about what project is selected
//needs to update based on current project array
