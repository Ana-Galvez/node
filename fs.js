const fs=require('node:fs')

const path=fs.readFileSync('./fs1.txt') //devuelve un buffer
const pathGood=fs.readFileSync('./fs1.txt','utf-8')
const pathGoodStr=fs.readFileSync('./fs1.txt').toString()
console.log(pathGoodStr);
