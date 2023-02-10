let nickName = 'John';
function greeting() {
//    let nickName = 'Peter';
    return function () {
        const x = 42;
 //       let nickName = 'Tigran';
        console.log(`Hello ${nickName}`);
    }
}

const hello = greeting();
nickName = 'Rabindranat';
hello();
