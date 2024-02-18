// //this is to learn js math operations
// let cost  = 10 + 3*(8)+5;
// console.log(cost);

// //round functions
// //Math.round function is used in javascript to round off a number.
// console.log(Math.round(3.5))
// console.log(Math.round(3.2))

// //converting temperature 

// //celcius to fahrenheit
// let celcius = prompt("Enter the temperature in celcius")
// let fahrenheit = celcius*(9/5)+32;
// console.log("The temperature in fahrenheit is ",fahrenheit);

// //revisiting javaScript objects

// const profile = {
//     userName:"deepak",
//     isFollow : true,
//     followers : 750,
//     following : 700,
//     posts : 10

// };

// // conditional statements in js
// //checking whether a number is a multiple of 5
// let number = prompt("Enter the number");
// if(number%5 === 0){
//     console.log(number," is a multiple of 5")
// }
// else{
//     console.log(number," is not a multiple of 5")
// }

// //Printing grades of students according to their marks recieved

// const marks = prompt("Enter the marks recieved");
// let grade = "";
// if(marks>=80 && marks<=100)
// grade = "A";
// else if(marks>=70)
// grade = "B";
// else if(marks>=60)
// grade = "C";
// else if(marks>=50)
// grade = "D";
// else 
// grade = "F"

// console.log("The grade is ",grade);

//for of loop - used to iterate over strings and arrays
//this prints each character in the variable "name"

// let name = "Deepak";

// for(let i of name){
//     console.log(" ",i);
// }

// //this prints each item in the array named arr
// let arr = ["ajay","depak"]
// for(let i of  arr){
//     console.log(" ",i);
// }

//for in loop - for object manipulation

// const student = {
//     name:"Deepak",
//     department: "IT",
//     semester: "8",
//     cgpa:"9.84"
// }

// for(let details in student){
//     console.log(details,"-> ",student[details]);
// }

//number guessing game using while loop
// let num;
// do{
//     num = Number(prompt("guess the number"));
//     console.log("wrong number")

// }while(num !=25)
// console.log("correct number");

//strings in js

let str1 = "Deepak r"
len = str1.length;
console.log(len)

//template literals
const obj = {
    item : "pen",
    price : 50
}
console.log(`The cost of ${obj.item} is ${obj.price} rupees`);

/*
string methods
toUpperCase()
toLowerCase()
trim()
slice()
concat()
*/

// let name = "deepak"
// console.log((name.toUpperCase()).toLowerCase())
// let value = "deepak rajesh" 
// console.log(value)
// console.log(name.slice(0,5));
// console.log(name.concat(value));

/*
practice qn
prompt user to enter their full name.Generate a username for them based
on input. Start username with @ followed by their full name and ending
with the fullname length
 */

let fullName = prompt("Enter the full name");
nameLength = fullName.length
userName = `@${fullName}${nameLength}`
console.log(userName)