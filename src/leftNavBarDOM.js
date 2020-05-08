import {differenceInDays } from 'date-fns'

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
            timeDisplay.innerHTML = '<i class="far fa-clock"></i>'

            if (projectsLibrary[i].date != undefined || projectsLibrary[i].date != "") {
                var difference = differenceInDays(new Date(projectsLibrary[i].date), new Date());
                if (difference < 3) {
                    timeDisplay.style.color = "#FF0000";
                } else if (difference < 7) {
                   timeDisplay.style.color = "#FFA200";
                } else if (difference < 30) {
                    timeDisplay.style.color = '#FFF000';
                } else {
                    timeDisplay.style.color = '#0CC400'
                }
            } else {
                timeDisplay.style.color = '#0CC400'
            }

        const projectTitle = document.createElement('div');
            projectTitle.className = "projectName";
            projectTitle.innerHTML = `<h3>${projectsLibrary[i].title}<h3>`;
        const deleteProjectButton = document.createElement('div');
            deleteProjectButton.className = "deleteProjectButton";
            deleteProjectButton.dataset.index = `${i}`;
            deleteProjectButton.innerHTML = '<i class="fas fa-ban"></i>'
            
        projectElement.appendChild(deleteProjectButton);
        projectElement.appendChild(timeDisplay);
        projectElement.appendChild(projectTitle);
        projectsNavBar.appendChild(projectElement);
    }
}

export default populateNavBar


//module that updates and controls the navigation bar