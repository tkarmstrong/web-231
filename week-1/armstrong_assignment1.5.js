/*
============================================
; Title:  Assignment 1.5
; Author: Tyler Armstrong
; Date:   2 Dec 2018
; Modified By: Tyler Armstrong
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Tyler";
var myLastName = "Armstrong";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line
var firstName = "Bob";
var lastName = "Smith";
var street = "505 Main Street"
var city = "Omaha";
var state = "NE";
var address = `${street} ${city}, ${state}`;
var payRateNum = 10.5;
var payRateText = `$${payRateNum}`;
var hireDate = new Date(2016, 4, 22).toLocaleDateString();
var completeString = 
    "First Name: " + firstName + '\n' +
    "Last Name: " + lastName + '\n' +
    "Address: " + address + '\n' +
    "Pay Rate: " + payRateText + '\n' +
    "Hire Date: " + hireDate; 

console.log(completeString);


// end of program 




 