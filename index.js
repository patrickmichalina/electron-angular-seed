const isElectronDev = () => !process.mainModule.filename.includes('app.asar');

if (isElectronDev()) {
  require('ts-node').register(); // This will register the TypeScript compiler
  require('./src/electron/entry'); // This will load our Typescript application 
} else {
  require('./dist/entry.js');
}
