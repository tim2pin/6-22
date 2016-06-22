 var name = "John";

 (function() {
     var name = "Tim";
     console.assert(name === "Tim"); // 1

     var name = "Jane";

     console.assert(name === "Jane"); // 2
 })();

console.assert(name === "John"); // 3

//Initially name is given the value "John" with a global scope. 
//When we test the value of name in our first console.assert(), name 
//has a value of undefined because it is located within an IFFE which 
//prevented the test from accessing the var name in the global scope. 
//To make the test pass i had to assign a value to name inside the local 
//scope of the IFFE (var name = "tim"). The second console.assert tests 
//the value of name again within the IFFE, but it has a value of "Jane" 
//because we redefined var name within the local scope. Our third 
//console.assert tests the value of name again, this time it has a value 
//of "John" because the test is ran outside of the IFFE and is now 
//recognizing var name's value as it was defined in the global scope.