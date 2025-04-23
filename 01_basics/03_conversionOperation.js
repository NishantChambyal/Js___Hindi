let score = "33";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);

console.log(valueInNumber);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN
// " " => 0

let isLoggedIn = "nishant";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => fasle
// "nishant" => true
// "  " => true
// null => false
// undefined => false

let someNumber = " ";

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// 55 => string
// "55" => string
// null => string
// undefined => string

// ++++++++++++++++++++++++++++++++++++++++++++++++++ operations +++++++++++++++++++++++++++++++++++++++++++++++++

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log( 2+2); // add
// console.log( 2-2); // subs
// console.log( 2*2); // multy
// console.log( 2**2); // square
// console.log( 2/2);  // divide
// console.log( 2%2); // remainder (modulas)

let str1 = "Hello";
let str2 = " Nishant";

let str3 = str1 + str2;

// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


// console.log((3+4)*5%3);

console.log(+true);   // 1
console.log(+""); // 0
 


 let num1 , num2 , num3;

 num1 = num2 = num3 = 2 + 2
 
 console.log(num2);
 

 let gameCounter = 100;
 ++gameCounter;

 console.log(gameCounter);

 // not suggest to do this type of messy conversion Must avoid