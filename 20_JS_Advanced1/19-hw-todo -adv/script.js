const clear = document.createElement('button');
clear.append(document.createTextNode('Clear All'));
document.body.insertBefore(clear, todoList);

item.onkeyup = function (e) {
    if (e.key === 'Enter') {
        addListItem();
    }
}

addItem.onclick = addListItem;

clear.onclick = function (e) {
    //todoList.innerHTML = '';
    while (todoList.firstElementChild) {
        todoList.firstElementChild.remove();
    }
}

function addListItem() {
    const text = item.value.trim();
    if (text) {
        const li = document.createElement('li');
        const content = document.createTextNode(text);
        const buttonDel = createButtonDelete();
        li.append(content, buttonDel);
        todoList.appendChild(li);
    }
    item.value = '';
}