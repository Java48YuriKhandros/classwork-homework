const size = container.offsetWidth - box.offsetWidth;
const t = setInterval(move, 20);
let pos = 0;
let i = 1;
function move(){  
    pos = pos + i;
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    if (pos === 0 || pos === size) {
        i = -i;
    }
}