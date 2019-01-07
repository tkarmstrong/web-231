/*
============================================
; Title:  Assignment 4.3 - Filtering
; Author: Tyler Armstrong
; Date:   6 January 2019
; Modified By: N/A
; Description: Showcases filtering arrays.
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 4.2"));

const vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

function getValue(vehicleArray, stringToSelect) {
  console.log('\n' + "-- DISPLAYING ARRAY ITEMS --");
  for (let index = 0; index < vehicles.length; index++) {
    const element = vehicles[index];

    console.log(element);
  }

  console.log('\n' + "-- SELECTED VALUE --");

  for (let index = 0; index < vehicles.length; index++) {
    const element = vehicles[index];

    if (element === stringToSelect) {
      console.log(element);
    }
  }
}

getValue(vehicles, "Motorcycle");

getValue(vehicles, "Bus");
