   // object-prototype.js
   Object.prototype.hello = function() {
    console.log("Hello!");
};
const obj = {};
obj.hello(); // Outputs: "Hello!"