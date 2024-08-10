const os=require('node:os');

console.log(`Detalles del sistema operativo:
  ${os.version}, ${os.release}, ${os.type}, ${os.platform}, ${os.arch}
  Total memoria ram: ${os.totalmem / 1000000000 + ' GB'}
  Memoria ram libre: ${os.freemem / 1000000000 + ' GB'}
  Cantidad de cpus: ${os.availableParallelism()}
  Ruta de usuario: ${os.homedir}
  Usuario: ${os.hostname}
  `);

