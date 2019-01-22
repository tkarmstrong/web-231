/*
============================================
; Title:  Exercise 7.2 - Constructor Functions
; Author: Tyler Armstrong
; Date:   22 January 2019
; Modified By: N/A
; Description: Showcases object constructor functions.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 7.2")+ '\n');

// Object constructor function
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// Array to hold employee objects
let employees = [
  // Instantiate employee objects
  new Employee(1, "Thomas", "Edison", "Software Engineer"),
  new Employee(2, "Benjamin", "Franklin", "Programmer"),
  new Employee(3, "Nikola", "Tesla", "Project Manager"),
  new Employee(4, "Charles", "Babbage", "Product Manager"),
  new Employee(5, "Alexander", "Bell", "Business Analyst")
]

// Function to print all employees to the console
function printEmployees(employees) {  
  for (let index = 0; index < employees.length; index++) {
    const employee = employees[index];
    console.log(`${employee.id} ${employee.firstName} ${employee.lastName} ${employee.title}`);
  }
}

// Execute function to print all employees to the console
printEmployees(employees);