//Index va a arrancar la app
//Se requiere el archivo app.js donde se instancia el framework 

const app = require('./app');

async function main () {
  //ya no es un callback sino una función asincrona
  await app.listen(app.get('port'));
  console.log('Server on port ', app.get('port'));
}
main();
//Envia en la ruta '/' respuesta (res) 'Hello world'
/*
req (solicitud) y res (respuesta) son exactamente 
los mismos objetos que proporciona Node.


  */
//se inicial el servidor y se asigna el puerto 3000 y devuelve el console log 
//esto es un callback, es un función que espera una respuesta 

/*
app.listen(3000, ()=>{
    console.log('server on port 3000');
});
*/