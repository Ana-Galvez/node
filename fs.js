const fs = require('node:fs')

// const path = fs.readFileSync('./fs1.txt') //devuelve un buffer
// const pathGood = fs.readFileSync('./fs1.txt', 'utf-8')
// const pathGoodStr = fs.readFileSync('./fs1.txt').toString()
// console.log(pathGoodStr);

// const contain = 'Este contenido se usa para agregarlo a un nuevo archivo o uno ya existente'
// fs.writeFileSync('./fs2.txt', contain);

// const addedContain= ' este contenido se agrega a algún archivo que ya existe y con contenido o si no existe lo crea'
// fs.writeFileSync('./fs1.txt',addedContain,{ flag:'a+'}) // hay diferentes flag sea a, r, w con variantes

//Blocking o síncrono. Hasta que no termine una tarea no sigue con lo demás
// console.log('Inicio del programa');
// console.log(fs.readFileSync('./text.txt','utf-8'));
// console.log('Fin del programa');

//Non Blocking o asíncrono. Sigue su ejecución sin importar si no terminó de leer el archivo
console.log('Inicio del programa');
fs.readFile('./fs1.txt','utf-8',(err,data)=>{
  if (err) throw err;
  else console.log(data);
})
fs.readFile('./fs0.txt','utf-8',(err,data)=>{
  if (err) throw err;
  else console.log(data);
})
console.log(fs.readFileSync('./fs0.txt','utf-8'))

console.log('Fin del programa');

