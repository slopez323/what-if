const prompt = require('prompt-sync')();

let classSize = Number(prompt("How many students are in the class? "));

if (classSize % 3 === 0) {
    console.log("There are " + (classSize / 3) + " group/s of 3 and 0 group/s of 2.")
} else if (classSize > 3 && classSize % 3 === 1) {
    console.log("There are " + ((classSize-4) / 3) + " group/s of 3 and 2 group/s of 2.")
} else if (classSize > 3 && classSize % 3 === 2) {
    console.log("There are " + ((classSize-2) / 3) + " group/s of 3 and 1 group/s of 2.")
} else {
    console.log("Input a valid number.")
}