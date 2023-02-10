//console.log(document.body.innerHTML);
//document.body.innerHTML = '<h1>Hello world</h1>';
const div1 = document.getElementById('div1');
//const div1 = document.querySelector('#div1');
//console.log(div1.innerHTML);
div1.style.border = '1px solid black';
// const x = document.getElementsByTagName('p')
// console.log(x.length);
const pdiv1 = document.querySelectorAll('#div1 > p');
for(let i = 0; i < pdiv1.length; i++){
    pdiv1[i].innerHTML = `<span>new text ${i + 1}</span>`
}

//const children = div1.childNodes;
const children = div1.children;
console.log(children.length);
console.log(children[0] === pdiv1[0]);
for(let i = 0; i < children.length; i++){
    children[i].style.color = 'red';
}
div1.firstElementChild.style.color = 'green';
const newP1 = document.createElement('p');
const newP1Text = document.createTextNode('This text created with special method');
newP1.appendChild(newP1Text);
div1.appendChild(newP1);
//div1.insertBefore(newP1, div1.firstElementChild);
//div1.insertBefore(newP1, div1.lastElementChild);
//document.body.insertBefore(newP1, div1.nextElementSibling);
const newP2 = document.createElement('p');
const newP2Text = document.createTextNode('This is p2 text');
newP2.append(newP2Text);
div1.replaceChild(newP2, div1.firstElementChild);
div1.removeChild(div1.firstElementChild.nextElementSibling);
//div1.remove()