class User {
    constructor(nickName){
        this.nickName = nickName;
 //     this.infoFunc = this.infoFunc.bind(this);
    }

    infoFunc = function(){
        console.log(`Nickname: ${this.nickName}`);
    }

    infoArrow = () => {
        console.log(`Nickname: ${this.nickName}`);
    }
}

const peter = new User('Peter');
console.log('===== Func =====');
peter.infoFunc();
console.log('===== Arrow =====');
peter.infoArrow();
console.log('===== Context Lost =====');
fn(peter.infoFunc.bind(peter));
// const func1 = peter.infoFunc;
// func1();


function fn(callBack){
    console.log(callBack);
    callBack();
}