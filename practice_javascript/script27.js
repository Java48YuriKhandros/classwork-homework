// let x = 5; alert( x++ );
// [ ] + false - null + true;
 console.log(typeof([]+false)); // false; 
 console.log([]+false-null+true); // NaN;

 let y = 1;
 let x = y = 2;
 alert(x);      // 2

 console.log([ ] + 1 + 2); // string 12

 alert( "1"[0] ) // '1'

 console.log(2 && 1 && null && 0 && undefined); //    2 && 1 && null  ----- null  
 // И запинается на лжи
 // ИЛИ запинается на правде

 //!!( a && b ) и (a && b) // false

 alert( null || 2 && 3 || 4 ); // 3
 // ИЛИ запинается на правде

 const a = [1, 2, 3];
 const b = [1, 2, 3];
 console.log(a == b);  // false

 console.log( +"Infinity" ); // number - Infinity

 console.log("Ёжик" > "яблоко"); //false

console.log( 0 || "" || 2 || undefined || true || falsе); //2 - ИЛИ запинается на правде (2)


