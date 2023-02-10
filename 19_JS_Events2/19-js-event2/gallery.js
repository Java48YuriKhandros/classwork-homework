const images = [
    "./Images/Rouen_Cathedral_1.jpg",
    "./Images/Rouen_Cathedral_2.jpg",
    "./Images/Rouen_Cathedral_3.jpg",
    "./Images/Rouen_Cathedral_4.jpg",
    "./Images/Rouen_Cathedral_5.jpg",
    "./Images/Rouen_Cathedral_6.jpg",
]
let i = 0;
buttonPrev.onclick = function () {
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    picture.src = images[i];
}

buttonNext.onclick = function () {
    i++;
    if(i >= images.length){
        i = 0;
    }
    picture.src = images[i];
}