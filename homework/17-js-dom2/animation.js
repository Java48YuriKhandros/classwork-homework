let t = setInterval(move, 20);

let pos = 0;
let i = 0;
function move() {
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    pos += i;
    if (pos >= 150) {
        i = -1;
    }
    if (pos <= 0) {
        i = 1;
    }

}



