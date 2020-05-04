const populateRightSideContent = (project="none") => {
// ----------------Change Project Information Display-----------------------------------
    const timeDisplay = document.getElementById("projectTimeDisplay");
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
        itemTitle.className = "itemTitle"
        itemTitle.innerHTML = `<h4>${arrayOfToDos[i].title}<h4>`;
        itemDiv.appendChild(itemTitle);

        if(arrayOfToDos[i].done == "yes") {
            itemDiv.className += " done";
            itemTitle.className += " lineThrough";
        }

        const moreInfoDiv = document.createElement('div');
        moreInfoDiv.className = "moreInfo";
        moreInfoDiv.innerHTML = "<h4>More<h4>";
        itemDiv.appendChild(moreInfoDiv);

        const deleteItemDiv = document.createElement('div');
        deleteItemDiv.className = "deleteItemDiv";
        deleteItemDiv.dataset.index = `${i}`;
        deleteItemDiv.innerHTML = "<h4>O<h4>"
        itemDiv.appendChild(deleteItemDiv);

        itemDisplay.appendChild(itemDiv);
    }

}

export default populateRightSideContent