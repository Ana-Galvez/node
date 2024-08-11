const fs = require('node:fs')

const path = fs.readFileSync('./fs1.txt') //devuelve un buffer
const pathGood = fs.readFileSync('./fs1.txt', 'utf-8')
const pathGoodStr = fs.readFileSync('./fs1.txt').toString()
console.log(pathGoodStr);

const contain = 'Este contenido se usa para agregarlo a un nuevo archivo o uno ya existente'
fs.writeFileSync('./fs2.txt', contain);

const addedContain= ' este contenido se agrega a algún archivo que ya existe y con contenido o si no existe lo crea'
fs.writeFileSync('./fs1.txt',addedContain,{ flag:'a+'}) // hay diferentes flag sea a, r, w con variantes

