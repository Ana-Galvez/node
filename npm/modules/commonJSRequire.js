const fs = require('node:fs')
const { add, substract, multiply, divide } = require('./commonJSExports.js')


console.log(add(2,3));
console.log(substract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));


console.log('Inicio del programa');
fs.readFile('../fs1.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  else console.log(data);
})
fs.readFile('../fs0.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  else console.log(data);
})
console.log(fs.readFileSync('../fs0.txt', 'utf-8'))

console.log('Fin del programa');