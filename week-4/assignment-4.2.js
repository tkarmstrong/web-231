/*
============================================
; Title:  Assignment 4.2 - Arrays
; Author: Tyler Armstrong
; Date:   6 January 2019
; Modified By: N/A
; Description: Showcases arrays.
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 4.2") + '\n');

const fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

function getFruit(fruits){
  fruits.forEach(element => {
    console.log(element);
  });
}

getFruit(fruits);





