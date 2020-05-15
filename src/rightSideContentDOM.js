import { formatDistance, formatRelative, differenceInDays } from 'date-fns'

const populateRightSideContent = (project="none") => {
// ----------------Change Project Information Display-----------------------------------
    const timeDisplay = document.getElementById("projectTimeDisplay");
    timeDisplay.style.color = "black";

    const theTitle = document.getElementById("projectName");
        theTitle.innerHTML = `<h1>${project.title}<h1>`;
    const descriptionDiv = document.getElementById("projectViewerDescription");
    descriptionDiv.innerHTML = "";

    if (project.description === ""){ //if no description
        //no description
    } else {
        descriptionDiv.innerHTML += `<h3>${project.description}<h3>`;
    }

    if (project.date ==="") { //if no date
        timeDisplay.innerHTML = '<i class="far fa-hourglass fa-3x"></i>'
        timeDisplay.style.color = 'var(--light-blue)';
    } else {
        // console.log(`${formatRelative(new Date(),new Date(project.date))};

        descriptionDiv.innerHTML += `<h3>${formatRelative(new Date(project.date),new Date())}</h3>`;

        // descriptionDiv.innerHTML += `<h3>Due in ${formatDistance(new Date(), new Date(project.date))}</h3>`;
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
    timeDisplay.classList.toggle('spin');

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

        const checkBoxDiv = document.createElement('div');
        checkBoxDiv.className = 'checkBox';
        itemDiv.appendChild(checkBoxDiv);

        const checkMark = document.createElement('i');
        checkMark.className = 'fas fa-check';
        checkMark.style.margin = 'auto';
        checkBoxDiv.appendChild(checkMark);

        const itemTitle = document.createElement('div');
        itemTitle.className = "itemTitle"
        itemTitle.innerHTML = `<h4>${arrayOfToDos[i].title}<h4>`;
        itemDiv.appendChild(itemTitle);

        if(arrayOfToDos[i].done == "yes") {
            itemDiv.className += " done";
            itemTitle.className += " lineThrough";
            checkBoxDiv.classList += ' fill';
        }

        const collapsible = document.createElement('div');
        collapsible.className = "collapsible";
        collapsible.dataset.index = `${i}`;
        
        if (arrayOfToDos[i].description == "" && arrayOfToDos[i].dueDate == ""){
            //if no description, do nothing
        } else {
            const moreInfoDiv = document.createElement('div');
            moreInfoDiv.className = "moreInfo";
            moreInfoDiv.innerHTML = '<i class="fas fa-info-circle"></i>';
            moreInfoDiv.dataset.index = `${i}`;
            itemDiv.appendChild(moreInfoDiv);
        }

        if (arrayOfToDos[i].description != "") {
            collapsible.innerHTML += `<h3>${arrayOfToDos[i].description}</h3>`
        }

        if (arrayOfToDos[i].dueDate != "") {
        var difference = formatDistance(new Date(), new Date(arrayOfToDos[i].dueDate));
        collapsible.innerHTML += `<br><h3>${difference}</h3>`
        }

        // itemDiv.appendChild(collapsible);


        const deleteItemDiv = document.createElement('div');
        deleteItemDiv.className = "deleteItemDiv";
        deleteItemDiv.dataset.index = `${i}`;
        deleteItemDiv.innerHTML = '<i class="fas fa-trash-alt"></i>';
        itemDiv.appendChild(deleteItemDiv);

        itemDiv.appendChild(collapsible);

        itemDisplay.appendChild(itemDiv);
    }

}

export default populateRightSideContent