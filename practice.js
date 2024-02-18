//this is to learn js math operations
let cost  = 10 + 3*(8)+5;
console.log(cost);

//round functions
//Math.round function is used in javascript to round off a number.
console.log(Math.round(3.5))
console.log(Math.round(3.2))

//converting temperature 

//celcius to fahrenheit
let celcius = prompt("Enter the temperature in celcius")
let fahrenheit = celcius*(9/5)+32;
console.log("The temperature in fahrenheit is ",fahrenheit);

//revisiting javaScript objects

const profile = {
    userName:"deepak",
    isFollow : true,
    followers : 750,
    following : 700,
    posts : 10

};