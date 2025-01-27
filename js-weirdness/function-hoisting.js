   // function-hoisting.js
   console.log(hoistedFunction()); // Outputs: "I am hoisted!"
   function hoistedFunction() {
       return "I am hoisted!";
   }