const fs=require('node:fs')

const path=fs.readFileSync('./fs1.txt','utf-8')
console.log(path);
