console.log(button1.title);
button1.addEventListener('click', show);
button1.addEventListener('click', event => console.log(event.timeStamp));

const names = [name1, name2, name3];
for(let i = 0; i < names.length; i++){
    names[i].onkeyup = valueToUpperCase;
}


function show(){
    for(let i = 0; i < names.length; i++){
        const p = document.createElement('p');
        const text = document.createTextNode(names[i].value);
        p.append(text);
        document.body.append(p);
        names[i].value = '';
    }
}

function valueToUpperCase(event) {
    event.target.value = event.target.value.toUpperCase();
}