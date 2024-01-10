let score = 57

console.log(typeof score)
score = String(score)
console.log(score)
console.log(typeof(score))


let scoreInStr = undefined
console.log(typeof scoreInStr)

const scoreInNumber = Number(scoreInStr)
console.log(typeof scoreInNumber)
console.log(scoreInNumber)

// "33" => 33
// "33abc" => NaN
// null => 0
// "" => 0
//  true => 1; false => 0

// 1 => true; 0 => false
// "" => false
// "dheeraj" => true

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.table([isLoggedIn,typeof isLoggedIn,booleanIsLoggedIn,typeof booleanIsLoggedIn]);

// "" => false
// "sdkljfs;l" => true

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " dheeraj"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion