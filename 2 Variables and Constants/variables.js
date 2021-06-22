/*
'var' is function scoped and undefined when accessing a variable before it's declared
'let' and 'const' are block scoped and ReferenceError when accessing a variable before it's declared, but const can't be reassigned
*/

//VAR EXAMPLE
var myName = "Miguel";

function printName(){ 
  console.log(myName);
  if(true){
     var myLastName = "Canessa";
  }
  console.log(myLastName);//Will print "Canessa"
}

printName();//Will print "Miguel"

//LET EXAMPLE
let myPosition = "Software Developer 01";

function printPosition(){
  let myPosition = "Software Developer 03";
  console.log(myPosition);  
}
printPosition();//Will print "Software Developer 03"
console.log(myPosition); // Will print "Software Developer 01"

//CONST EXAMPLE
const MY_COUNTRY = "PERU 01";

function printCountry(){
  const MY_COUNTRY = "PERU 03";
  console.log(MY_COUNTRY);  
}
printCountry();//Will print "PERU 03"
console.log(MY_COUNTRY); // Will print "PERU 01"