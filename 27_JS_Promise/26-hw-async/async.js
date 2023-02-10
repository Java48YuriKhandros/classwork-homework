//Problem -> console 10 times 10
// for(var i = 0; i < 10; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000)
// }

//Solution 1 -> use let
// for(let i = 0; i < 10; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000)
// }

//Solution 2 -> use wrapper function
// for (var i = 0; i < 10; i++) {   
//     task(i)
// }
// function task(i) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000)
// }

//Solution 3 -> use anonimous function
// for (var i = 0; i < 10; i++) {
//     (function(i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000)
//     })(i) 
// }

//Solution 4 -> use setTimeout args
// for(var i = 0; i < 10; i++){
//     setTimeout(function(i){
//         console.log(i);
//     }, 1000, i)
// }

//Solution 5 -> for fun
for(var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i++ % 10);
    }, 1000)
}