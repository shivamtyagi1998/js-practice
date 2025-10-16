// ********************** String to Number Conversion **********************

let numberString = "124" // type = string 

let numberValue = Number(numberString) // It is used to convert value to number type. 

console.log(numberValue) // output : 124
console.log(typeof numberValue) // type = number

let name = "shivam" // type = string 

let nameNumber = Number(name) //if we try to convert string to number for non number value it returns NaN  (Not a Number).

console.log(nameNumber) // output : NaN
console.log(typeof nameNumber) // type = number


// ********************** To String Conversion **********************

let age = 25 
let isLoggedIn = false

let ageString = age.toString()
let isLoggedInString = isLoggedIn.toString()

console.table([ageString,isLoggedInString])


// ********************** To Boolean Conversion **********************

let isBool = false

isBool = Boolean(0) // Output = false (0 will be converted to bool and act as false all other integer will act as true)
console.log(isBool)

isBool = Boolean(1) // Output = false 
console.log(isBool)

isBool = Boolean(-11) // Output = false 
console.log(isBool)


isBool = Boolean("")  // Output = false (Empty string will act as false)
console.log(isBool)

isBool = Boolean("er") // Output = trye (Non-Empty string will act as true)
console.log(isBool)
