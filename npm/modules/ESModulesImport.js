// import {readFile,readFileSync} from 'node:fs'
import { add, substract, multiply, divide } from './ESModulesExport.js'


console.log(add(2,3));
console.log(substract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));

console.log('Inicio del programa');
// readFile('fs0.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   else console.log(data);
// })
// readFile('fs1.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   else console.log(data);
// })
// console.log(readFileSync('fs0.txt', 'utf-8'))

console.log('Fin del programa');