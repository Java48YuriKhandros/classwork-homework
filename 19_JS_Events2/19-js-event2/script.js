addItem.onclick = function () {
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