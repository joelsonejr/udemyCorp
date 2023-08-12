/*
SUMMARY

3.31 - Strict Mode
3.32 - Functions


------------------------------------------------------------------------------

NOTES:


//3.31 Strict Mode

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if(hasDriversLicense) {
  console.log(`I can drie`);
}

const interface = 'Audio';

------------------------------------------------------------------------------

*/

//3.32 - Functions

function logger() {
  console.log(`This is a function`);
}

//calling/ running / invoking a function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
console.log (`${apples} and ${oranges}`);

  const juice = `I'm making a juice with ${apples} apples and ${oranges} oranges`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);