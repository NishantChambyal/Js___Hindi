let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(valueInNumber);
console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN
// " " => 0


let isLoggedIn = "nishant"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => fasle
// "nishant" => true
// "  " => true
// null => false
// undefined => false


let someNumber = " "

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

// 55 => string
// "55" => string
// null => string
// undefined => string
