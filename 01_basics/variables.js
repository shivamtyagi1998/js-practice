

const name = "Shivam"

/*const keyword used to define constant variable
it means the value of the constant variable cannot be changed after initialization
*/

//name = "Shiv"  // It will throw error


let age = 29

/* let keyword is used to define variable 
whose value can be changed after initialization but within the block scope
*/

age = 29

var jobProfile = "iOS Developer"

/* var keyword is used to define variable 
whose value can be changed after initialization
Difference between let and var is 
we can re-define the var with same name and within the same scope 
and if we change value for one variable it will update all variable with same name.
*/ 
var jobProfile = "Mobile Application Developer"

console.table([name,age,jobProfile]) // it will log output to console in Tabular format.