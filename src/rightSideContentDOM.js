import { formatDistance, differenceInDays } from 'date-fns'

const populateRightSideContent = (project="none") => {
// ----------------Change Project Information Display-----------------------------------
    const timeDisplay = document.getElementById("projectTimeDisplay");
    timeDisplay.innerHTML = '<i class="far fa-clock fa-3x"></i>'
    timeDisplay.style.color = '#0CC400';

    const theTitle = document.getElementById("projectName");
        theTitle.innerHTML = `<h1>${project.title}<h1>`;
    const descriptionDiv = document.getElementById("projectViewerDescription");
    if (project.date != "") {
        descriptionDiv.innerHTML = `<h4>Due in ${formatDistance(new Date(), new Date(project.date))}</h4><br><h4>${project.description}<h4>`;
    var difference = differenceInDays(new Date(project.date), new Date());
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
        descriptionDiv.innerHTML = `<h4>${project.description}<h4>`;
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