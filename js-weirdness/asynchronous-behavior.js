    // asynchronous-behavior.js
    console.log(1);
    setTimeout(() => console.log(2), 0);
    console.log(3);
    // Outputs: 1, 3, 2