function Person(nickName) {
    this.nickName = nickName;

    this.infoFunc = function(){
        console.log(`Nickname: ${this.nickName}`);
    }

    this.infoArrow = () => {
        console.log(`Nickname: ${this.nickName}`);
    }
}