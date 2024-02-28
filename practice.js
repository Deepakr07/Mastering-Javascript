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

// let fullName = prompt("Enter the full name");
// nameLength = fullName.length
// userName = `@${fullName}${nameLength}`
// console.log(userName)

//revisiting js arrays

// let footballTeams = ["arsenal","real Madrid","chelsea","Kerala Blasters"]
// for(let i of footballTeams){
//     console.log(i);
// }

//applying a 10 percent discount to items and printing it
var items = [250,645,300,900,50];
for(let i in items){
    items[i] = items[i]-(0.1*items[i]);
}
console.log("Final price of items after applying discount is ");
for(let i of items)
console.log(i);

/*
push() - to add an item to the end of an array
pop() - to remove an item from the end of an array
unshift() - to add an item to the start of an array
shift() - to remove an item from the start of an array
splice() - to change the contents of an array by removing or 
            replacing the items in the array
*/

const arr = [1,2,3,4,5]
arr.push(5)
console.log("After pushing an element the array is ")
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(0)
console.log(arr)

//arrow functions

let sum = ( a,b) =>{
    return a+b
}

console.log(sum(5,8));

//js sets
//use new Set() to create a set

const letters = new Set(['a','b','c']);
console.log(letters);

letters.add('d');
letters.delete('c');
console.log(letters);

//js map function
//creates a new aray by calling a function on each element of the array
//it doesnot change the original array
//doesnot execute on empty array
const array = [4,9,25,36];
const sqRt = array.map(Math.sqrt)
console.log(sqRt);
let array2 = array.map(function (element){
    return element*5
});
console.log(array2);

//javascript optional chaining
 
const user = {
    dog: {
      name: "Snoopy"
    }
  };
 console.log(user.dog?.name);
 console.log(user.cat?.name);//this value is undefined 