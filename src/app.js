//aquí va a estar la app
//Inicializar/requerir el framework
const express = require('express');

// ejecutar el framework, eso se hace a través de una función, 
//que devuelve un objetose almancesa en una constante APP
const app = express();

const path = require('path');

const morgan = require('morgan');


//Settings (configuraciones de servidor)

app.set('port', 5000);

//Aquí establecemos expliciamente la dirección estática de las vistas
//Para eso concatenamos el modulo path (de node) con _dirname
//con eso hacemos que la dirección sea multiplataforma 
app.set('views', path.join(__dirname, 'views'));


//Se agraga la ingenieria de vistas EJS, como Express ya lo tiene integrado solo se instancia con la siguiente línea de comando 
app.set('view engine', 'ejs')

//Middlewares
app.use(morgan('dev'));

//Recibe los datos desde la vista y lo transforma en JSON automáticamente
app.use(express.urlencoded({extended:false}));

//Routers
app.use(require('./routes/index'))

//Static (archivos estáticos -> carpeta public)
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app; 