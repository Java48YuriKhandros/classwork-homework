function createButtonDelete() {
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('X'));
    buttonDel.classList.add('del');
    buttonDel.onclick = function (e) {
        e.target.parentElement.remove();
    }
    return buttonDel;
}