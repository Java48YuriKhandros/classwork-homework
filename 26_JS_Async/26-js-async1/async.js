console.log('One');
setTimeout(function(){
    console.log('Two');
}, 2000);
setTimeout(function(){
    console.log('Two 1/2');
    setTimeout(function(){
        console.log('O-o-ops');
    }, 1)
}, 1);
//for(let i = 0; i <1000000000; i++);
console.log('Three');