/*
============================================
; Title:  Assignment 2.4 - Functions
; Author: Tyler Armstrong
; Date:   05 December 2018
; Modified By: N/A
; Description: Showcases building and invoking functions.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Assignment 2.4") + '\n');

/**
* Params: firstName, lastName
* Response: output 
* Description: Returns first and last names concatenated
*/
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}

/**
* Params: yea, month, day
* Response: output 
* Description: Returns a formatted Date object 
*/
function dateWriter(year, month, day){
    const monthIndex = month - 1;
    return new Date(year, monthIndex, day).toLocaleDateString('en-US');
}

/**
* Params: number, numOfFixedPositions
* Response: output 
* Description: Returns a float with the specified fixed position of decimal points
*/
function formatNumber(number, numOfFixedPositions){
    return number.toFixed(numOfFixedPositions);
} 

/**
* Params: numberString
* Response: output 
* Description: Returns a parsed string to integer.
*/
function convertToInt(numberString){
    return parseInt(numberString);
}

/**
* Params: numberString
* Response: output 
* Description: Returns a parsed string to float.
*/
function convertToFloat(numberString){
    return parseFloat(numberString);
}

//Test Cases
console.log("Hello my name is " + fullName("Tyler", "Armstrong") + "!\n");

console.log("Todays date is " + dateWriter(2018, 12, 05) + " and the current temperature is " + formatNumber(33.45, 1) + " degrees.\n");

console.log("I am " + convertToInt("36") + " years old and my savings account goal is " + convertToFloat("12000") + " dollars.");