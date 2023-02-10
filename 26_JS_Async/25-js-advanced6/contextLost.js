class User {
    constructor(nickName){
        this.nickName = nickName;
 //     this.infoFunc = this.infoFunc.bind(this);
    }

    infoFunc = function(greeting, symbol){
        console.log(`${greeting} Nickname: ${this.nickName}${symbol}`);
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
const mary = {
    nickName: 'Mary'
}
fn(peter.infoFunc.bind({nickName: 'John'}));
const func1 = peter.infoFunc.bind(peter);
func1('Mr.', '!');
console.log('===== Call, Apply =====');
peter.infoFunc.apply(mary, ['Mrs.', '!']);
peter.infoFunc.call({nickName: 'John'}, 'Mr.', '!');


function fn(callBack){
    console.log(callBack);
    callBack();
}