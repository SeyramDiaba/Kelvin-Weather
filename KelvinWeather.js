// Setting 'kelvin' to a constant of 293
const kelvin = 0;

// Converting 'kelvin' to celsius
var celsius = kelvin-273;

// Calculationg temperature in fahrenheit
let fahrenheit = celsius * (9/5)+ 32;

// Round down the Fahrenheir temperature
fahrenheit = Math.floor(fahrenheit);

// String interpolated output (template literals)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Converting celsius to the Newton scale
let newton = Math.floor(celsius * (33/100));
console.log(`The Newton scale is: ${newton}.`);




