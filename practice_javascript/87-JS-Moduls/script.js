function button() {
    return 'button';
}

export default class Slider {
    constructor (width, heigth, count){
        this.width = width;
        this.heigth = heigth;
        this.count = count;
    }
    nextSlide() {
        console.log('Moving forward');
    }
    prevSlide() {
        console.log('Moving back');
    }
    whoAmI() {
        console.log(this.width, this.heigth, this.count);
    }
}

class AutoSlider extends Slider {
    constructor (width, heigth, count, auto) {
        super(width, heigth, count);
        this.auto = auto;
    }
    play(){
        console.log(`Autoplay; ${this.auto}`);
    }
}

//const  