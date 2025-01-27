   // closures.js
   const funcs = [];
   for (var i = 0; i < 3; i++) {
       funcs.push(function() {
           console.log(i);
       });
   }
   funcs.forEach(func => func()); // Outputs: 3, 3, 3