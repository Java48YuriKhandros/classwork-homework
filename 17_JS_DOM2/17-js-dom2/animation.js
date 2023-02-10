const t = setInterval(move, 40);
let pos = 0;
function move(){
    pos++;
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
    if(pos >= 150){
        clearInterval(t);
    }
}