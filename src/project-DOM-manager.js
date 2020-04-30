const manageDOM = (project) => {

    const projectView = document.createElement('div'); //container
    projectView.className = "projectViewer";


    const header = document.createElement('div');
    header.className = "fullWidth";
    header.id = "projectHeader";
    const timeDisplay = document.createElement('div');
    timeDisplay.innerHTML = "<h1>O<h1>"
    timeDisplay.className = "projectTimeDisplay";
    const title = document.createElement('div');
    title.innerHTML = `<h1>${project.title}<h1>`
    title.className = "projectName";
    header.appendChild(timeDisplay);
    header.appendChild(title);
    projectView.appendChild(header);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.innerHTML = `<h4>${project.description}<h4>`
    descriptionDiv.className = "projectViewerDescription";
    projectView.appendChild(descriptionDiv);

    const itemDisplay = document.createElement('div');
    itemDisplay.className = "projectViewerItems";
    projectView.appendChild(itemDisplay);

    var arrayOfToDos = project.toDos;
    var i;

    for (i = 0; i<arrayOfToDos.length; ++i) {
        const item = document.createElement('div');
        item.className = "item"
        item.innerHTML = `<h4>O ${arrayOfToDos[i].title}<h4>`
        itemDisplay.appendChild(item);
    }
    

    return projectView
}

export default manageDOM

//module... not factory function

//this function should be called in Index.js and appended to the rightSideContainer