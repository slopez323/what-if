const prompt = require('prompt-sync')();

let earthWeight = Number(prompt("How many pounds do you weigh on earth? "));
let planet = Number(prompt("What planet do you want to fight in? Input the corresponding number below: \n1 for Venus \n2 for Mars \n3 for Jupiter \n4 for Saturn \n5 for Uranus \n6 for Neptune: "));

if (planet === 1) {
    console.log("Your weight in Venus is " + (earthWeight * .78))
} else if (planet === 2) {
    console.log("Your weight in Mars is " + (earthWeight * .39))
} else if (planet === 3) {
    console.log("Your weight in Jupiter is " + (earthWeight * 2.65))
} else if (planet === 4){
    console.log("Your weight in Saturn is " + (earthWeight * 1.17))
} else if (planet === 5){
    console.log("Your weight in Uranus is " + (earthWeight * 1.05))
} else if (planet === 6){
    console.log("Your weight in Neptune is " + (earthWeight * 1.23))
} else {
    console.log("Invalid input")
}