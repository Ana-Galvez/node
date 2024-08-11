const path= require('node:path')

const pathComplete= __filename

const pathCompleteObj={
  dir:'/practicas/node',
  base:'path.js'
}

// console.log(path.parse(pathComplete));
// console.log(`La ruta completa es: ${path.parse(pathComplete).dir}
// Y el archivo se llama ${path.parse(pathComplete).name}
// Su extensión es ${path.parse(pathComplete).ext}
// `);
// console.log(path.basename(pathComplete,path.extname(pathComplete))); // archivo con extensión, segundo argumento lo que no queremos que aparezca
// console.log(path.dirname(pathComplete)); // ruta sin archivo
// console.log(`\n${path.resolve(path.dirname(pathComplete),path.basename(pathComplete))}\n`);
// console.log(path.resolve(path.format(pathCompleteObj)));
console.log(pathComplete.split(path.sep)); //devuelve un array con cada elemento siendo separado por / o \





