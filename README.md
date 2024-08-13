## NPM  node package manage
- Gestor de paquetes incluido en Nodejs
- es una herramienta cli  commands line interface
- repositorio en línea que alberga los paquetes  npmjs.com
- hay otros como yarn y pnpm
- npm init -y  inicia sin asistente
- npm install package o npm install package@version  o npm i package
- npm uninstall package o npm un package
- npm update package o npm update package@version


- node_modules: se almacenan los archivos de los paquetes instalados
- .gitignore: node_modules   porque no se debe subir a un repositorio
- package.json: se guardan las dependencias de los paquetes instalados
- package-lock.json: permite la instalación de dependencias entre diferentes sistemas operativos, guardando cada dependencia con su url de instalación

- usando package.json poniendo "type":"module", no es necesario que los archivos donde se exporta e importan usando es modules tengan que ser mjs,  pueden usar js