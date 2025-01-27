   // this-keyword.js
   const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};
const getValue = obj.getValue;
console.log(getValue()); // Outputs: undefined (this is not bound to obj)