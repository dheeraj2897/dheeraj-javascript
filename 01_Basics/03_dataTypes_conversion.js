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