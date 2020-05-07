const populateRightSideContent = (project="none") => {
// ----------------Change Project Information Display-----------------------------------
    const timeDisplay = document.getElementById("projectTimeDisplay");
    timeDisplay.innerHTML = '<i class="far fa-clock fa-3x"></i>'
    //this was removed... the timeDisplay should show a clock of some kind... or what percentage of the To Do Items are completed as a pie chart;
    const theTitle = document.getElementById("projectName");
        theTitle.innerHTML = `<h1>${project.title}<h1>`;

    const descriptionDiv = document.getElementById("projectViewerDescription");
        descriptionDiv.innerHTML = `<h4>${project.description}<h4>`;

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

        if (arrayOfToDos[i].description == "") {
    
        } else {
            const moreInfoDiv = document.createElement('div');
            moreInfoDiv.className = "moreInfo";
            moreInfoDiv.innerHTML = '<i class="fas fa-info-circle"></i>';
            moreInfoDiv.dataset.index = `${i}`;
            itemDiv.appendChild(moreInfoDiv);
            itemTitle.classList.toggle('itemTitleNoInfo');
            const collapsible = document.createElement('div');
            collapsible.className = "collapsible";
            collapsible.innerHTML = `<h4>${arrayOfToDos[i].description}<h4>`;
            collapsible.dataset.index = `${i}`;
            itemDiv.appendChild(collapsible);
        }

        // const moreInfoDiv = document.createElement('div');
        // moreInfoDiv.className = "moreInfo";
        // moreInfoDiv.innerHTML = '<i class="fas fa-info-circle"></i>';
        // moreInfoDiv.dataset.index = `${i}`;
        // itemDiv.appendChild(moreInfoDiv);

        const deleteItemDiv = document.createElement('div');
        deleteItemDiv.className = "deleteItemDiv";
        deleteItemDiv.dataset.index = `${i}`;
        deleteItemDiv.innerHTML = '<i class="fas fa-trash-alt"></i>';
        itemDiv.appendChild(deleteItemDiv);

        // const collapsible = document.createElement('div');
        // collapsible.className = "collapsible";
        // collapsible.innerHTML = `<h4>${arrayOfToDos[i].description}<h4>`;
        // collapsible.dataset.index = `${i}`;
        // itemDiv.appendChild(collapsible);

        itemDisplay.appendChild(itemDiv);
    }

}

export default populateRightSideContent