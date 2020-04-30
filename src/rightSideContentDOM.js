const populateRightSideContent = (project="none") => { //passed the project object as argument

    //need to break this up... make the enduring elements part of the HTML and simply fill them  with the project specific information


    // const rightSideContainer = document.getElementById("rightSideContainer");
    // while (rightSideContainer.hasChildNodes()){
    //     rightSideContainer.removeChild(rightSideContainer.firstChild);
    // }

    // const projectView = document.createElement('div'); //container
    // projectView.className = "projectViewer";


    // const header = document.createElement('div');
    //     header.className = "fullWidth";
    //     header.id = "projectHeader";

    const timeDisplay = document.getElementById("projectTimeDisplay");
        // const timeDisplay = document.createElement('div');
        timeDisplay.innerHTML = "<h1>O<h1>";
            // timeDisplay.className = "projectTimeDisplay";
    const theTitle = document.getElementById("projectName");
        // const theTitle = document.createElement('div');
        theTitle.innerHTML = `<h1>${project.title}<h1>`;
        // theTitle.className = "projectName";
    //     header.appendChild(timeDisplay);
    //     header.appendChild(theTitle);
    // projectView.appendChild(header);

    const descriptionDiv = document.getElementById("projectViewerDescription");
    // const descriptionDiv = document.createElement('div');
        descriptionDiv.innerHTML = `<h4>${project.description}<h4>`;
        // descriptionDiv.className = "projectViewerDescription";
    // projectView.appendChild(descriptionDiv);

    const itemDisplay = document.getElementById("projectViewerItems");

    while(itemDisplay.hasChildNodes()) {
        itemDisplay.removeChild(itemDisplay.firstChild);
    }

    // const itemDisplay = document.createElement('div');
        // itemDisplay.className = "projectViewerItems";
    // projectView.appendChild(itemDisplay);

    var arrayOfToDos = project.toDos;
    var i;

    for (i = 0; i<arrayOfToDos.length; ++i) {

        const itemDiv = document.createElement('div');
        itemDiv.className = "item";
        itemDiv.dataset.index = `${i}`;


        const itemTitle = document.createElement('div');
        itemTitle.className = "itemTitle"
        itemTitle.innerHTML = `<h4>O ${arrayOfToDos[i].title}<h4>`;
        itemDiv.appendChild(itemTitle);

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

    // return projectView
}

export default populateRightSideContent

//this should be renamed to update RIGHT SIDE DOM or zoiets