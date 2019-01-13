/*
============================================
; Title:  Assignment 5.2 - Built-in Functions
; Author: Tyler Armstrong
; Date:   13 January 2019
; Modified By: N/A
; Description: Showcases built-in functions.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 5.2") + '\n');

const foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

foods.forEach(food => console.log(food));