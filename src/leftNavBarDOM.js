import {differenceInDays } from 'date-fns'

const populateNavBar = (projectsLibrary) => {

    const projectsNavBar = document.getElementById("projectsNavBar"); //remove old Projects
    while (projectsNavBar.hasChildNodes()){
        projectsNavBar.removeChild(projectsNavBar.firstChild);
    }

    const currentDateDisplay = document.getElementById('appLogo');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var date = new Date();
    currentDateDisplay.innerHTML = `<h2>${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</h2>`;

    

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


        const listLength = projectsLibrary[i].toDos.length
        var y = 0;
        var doneCount = 0;
        for (y=0; y<listLength; ++y) {
            if (projectsLibrary[i].toDos[y].done === 'yes') {
                doneCount += 1;
            }
        }
        var leftToDoCount = listLength - doneCount;

            if (leftToDoCount > 0) {
                projectTitle.innerHTML += `<h6>${projectsLibrary[i].title}<h5>${leftToDoCount}</h5></h6>`;
            } else {
                projectTitle.innerHTML = `<h6>${projectsLibrary[i].title}<h6>`;
            }

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