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

            if (projectsLibrary[i].date != undefined && projectsLibrary[i].date != "") {
                var difference = differenceInDays(new Date(projectsLibrary[i].date), new Date());
                if (difference < 1) {
                    timeDisplay.style.color = 'var(--hourglass-red)';
                    timeDisplay.innerHTML = '<i class="fas fa-hourglass-end"></i>'
                } else if (difference < 7) {
                   timeDisplay.style.color = 'var(--hourglass-orange)';
                   timeDisplay.innerHTML = '<i class="fas fa-hourglass-half"></i>'
                }else {
                    timeDisplay.style.color = 'var(--hourglass-green)';
                    timeDisplay.innerHTML = '<i class="fas fa-hourglass-start"></i>'
                }
            } else {
                timeDisplay.style.color = 'blue'
                timeDisplay.innerHTML = '<i class="far fa-hourglass"></i>'
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