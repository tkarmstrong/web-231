/*
============================================
; Title:  Assignment 4.4 - Predicates
; Author: Tyler Armstrong
; Date:   6 January 2019
; Modified By: N/A
; Description: Showcases filtering and predicates.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Assignment 4.4"));

const states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
let sortedStates = [];
let selectedState;

function getState(statesArray, stateToSelect) {

  // filter/sort statesArray and assign to 'sortedStates'
  let sortedStates = statesArray.filter(function (state, index) {
    return states.lastIndexOf(state) === index;
  }).sort(function (a, b) {
    return a < b ? -1 : 1;
  });

  /* 
  ; Iterate and log original array elements 
  ;   - Also assign value to selectedState
  */
  console.log('\n' + "-- ORIGINAL ARRAY --");
  for (let index = 0; index < states.length; index++) {
    const element = statesArray[index];
    // Assign the appropriate value to selectedState
    if (element === stateToSelect) {
      selectedState = element;
    }
    console.log(element);
  }

  // Iterate and log sorted array elements
  console.log('\n' + "-- SORTED ARRAY --");
  for (let index = 0; index < states.length; index++) {
    const element = sortedStates[index];
    
    console.log(element);
  }

  // Log the selected state
  console.log('\n' + "-- SELECTED VALUE --" + '\n' + selectedState);
  
}

getState(states, "Iowa");