const isElectronDev = () => process.mainModule.filename.indexOf('app.asar') === -1;

if (isElectronDev()) {
  require('ts-node').register(); // This will register the TypeScript compiler
  require('./src/electron/entry'); // This will load our Typescript application 
} else {
  require('./dist/entry.js');
}
