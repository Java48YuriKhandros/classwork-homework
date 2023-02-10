addItem.onclick = function(){
    const text = item.value.trim();
    const li = document.createElement('li');  
    const content = document.createTextNode(text);
    li.appendChild(content);
    todoList.appendChild(li);
    item.value = '';
}