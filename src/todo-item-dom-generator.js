const generateDomItem = () => {

const toDoItem = document.createElement('div');
toDoItem.className = "toDoItem";

const titleWrapper = document.createElement('div');
titleWrapper.className = "titleWrapper";
const titleText = document.createElement('div');
titleText.className = "textDiv";
titleWrapper.appendChild(titleText);

const descriptionWrapper = document.createElement('div');
descriptionWrapper.className = "descriptionWrapper";
const descriptionText = document.createElement('div');
descriptionText.className = "textDiv";
descriptionWrapper.appendChild(descriptionText);

const checkBoxWrapper = document.createElement('div');
checkBoxWrapper.className = "checkBoxWrapper";
const checkBox = document.createElement('div');
checkBox.className = "textDiv";
checkBoxWrapper.appendChild(checkBox);

const deleteWrapper = document.createElement('div');
deleteWrapper.className = "deleteWrapper";
const deleteIcon = document.createElement('div');
deleteIcon.className = "textDiv";
deleteWrapper.appendChild(deleteIcon);

toDoItem.appendChild(titleWrapper);
toDoItem.appendChild(descriptionWrapper);
toDoItem.appendChild(checkBoxWrapper);
toDoItem.appendChild(deleteWrapper);

return toDoItem;
}

export default generateDomItem