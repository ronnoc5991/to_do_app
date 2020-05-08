import { formatDistance, differenceInDays } from 'date-fns'

const populateRightSideContent = (project="none") => {
// ----------------Change Project Information Display-----------------------------------
    const timeDisplay = document.getElementById("projectTimeDisplay");

    const theTitle = document.getElementById("projectName");
        theTitle.innerHTML = `<h1>${project.title}<h1>`;
    const descriptionDiv = document.getElementById("projectViewerDescription");
    descriptionDiv.innerHTML = "";

    if (project.date ==="") { //if no date
        timeDisplay.innerHTML = '<i class="far fa-hourglass fa-3x"></i>'
        timeDisplay.style.color = 'var(--hourglass-blue)';
    } else {
        descriptionDiv.innerHTML = `<h4>Due in ${formatDistance(new Date(), new Date(project.date))}</h4><br>`;
        var daysUntilDue = differenceInDays(new Date(project.date), new Date());
        if (daysUntilDue < 1) {
            timeDisplay.innerHTML = '<i class="fas fa-hourglass-end fa-3x"></i>';
            timeDisplay.style.color = 'var(--hourglass-red)';
        } else if (daysUntilDue < 7) {
            timeDisplay.innerHTML = '<i class="fas fa-hourglass-half fa-3x"></i>';
            timeDisplay.style.color = 'var(--hourglass-orange)';
        } else {
            timeDisplay.innerHTML = '<i class="fas fa-hourglass-start fa-3x"></i>';
            timeDisplay.style.color = 'var(--hourglass-green)'
        }
    }

    if (project.description === ""){ //if no description
        //no description
    } else {
        descriptionDiv.innerHTML += `<h4>${project.description}<h4>`;
    }

// -------------------------------------------------------------------------------------

    const itemDisplay = document.getElementById("injectProjectItemsHere");

    while(itemDisplay.hasChildNodes()) {
        itemDisplay.removeChild(itemDisplay.firstChild);
    }

    var arrayOfToDos = project.toDos;
    var i;

    for (i = 0; i<arrayOfToDos.length; ++i) {

        const itemDiv = document.createElement('div');
        itemDiv.className = "item";
        itemDiv.dataset.index = `${i}`;

        const itemTitle = document.createElement('div');
        itemTitle.className = "itemTitle itemTitleNoInfo"
        itemTitle.innerHTML = `<h4>${arrayOfToDos[i].title}<h4>`;
        itemDiv.appendChild(itemTitle);

        if(arrayOfToDos[i].done == "yes") {
            itemDiv.className += " done";
            itemTitle.className += " lineThrough";
        }

        const moreInfoDiv = document.createElement('div');
        moreInfoDiv.className = "moreInfo";
        moreInfoDiv.innerHTML = '<i class="fas fa-info-circle"></i>';
        moreInfoDiv.dataset.index = `${i}`;
        itemDiv.appendChild(moreInfoDiv);
        itemTitle.classList.toggle('itemTitleNoInfo');
        const collapsible = document.createElement('div');
        collapsible.className = "collapsible";

        if (arrayOfToDos[i].dueDate != "") {
            var difference = formatDistance(new Date(), new Date(arrayOfToDos[i].dueDate));
            collapsible.innerHTML = `<h4>Due in ${difference}</h4><br><h4>${arrayOfToDos[i].description}<h4>`;
        } else {
            collapsible.innerHTML = `<h4>${arrayOfToDos[i].description}<h4>`;
        }

        collapsible.dataset.index = `${i}`;
        itemDiv.appendChild(collapsible);

        const deleteItemDiv = document.createElement('div');
        deleteItemDiv.className = "deleteItemDiv";
        deleteItemDiv.dataset.index = `${i}`;
        deleteItemDiv.innerHTML = '<i class="fas fa-trash-alt"></i>';
        itemDiv.appendChild(deleteItemDiv);

        itemDisplay.appendChild(itemDiv);
    }

}

export default populateRightSideContent