const item = document.getElementById("item"); //input
const addItem = document.getElementById("addItem");  //button
const oList = document.getElementById("todoList"); //ol


const textAdd = () => {
    const text = item.value;
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(text));
    oList.appendChild(listItem);
    item.value = "";
};

addItem.addEventListener("click", textAdd);