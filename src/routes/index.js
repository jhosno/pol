const {
  Router
} = require('express');

const router = Router();

const uuid = require('uuid/v4'); // Require librería uuid v4 -> generador de ID unico

const fs = require('fs'); //File System, API nativa(NODE) manejadora de archivos 

const jsonRecords = fs.readFileSync('src/records.json', 'utf-8') //Lee el archivo y devuelve el contenido 
let records = JSON.parse(jsonRecords); //Lee un string con JSON. 


let today = new Date();


//con el router crear un el metodo get una ruta inicial 
router.get('/', (req, res) => {
  res.render('index.ejs', {
    records,
    title : 'Home' //devuelve un objeto con valores
  });
});

router.get('/new-record', (req, res) => {
  res.render('new-record.ejs', {
    title : 'New entry'
  })
})

//min 40 para las validaciones 
//Maneja la petición POST desde la dirección '/new-record'
router.post('/new-record', (req, res) => {
  //descontruye la variable
  const {
    monotony,
    quote
  } = req.body;
  //Se le asignan los valores a los variables 
  let newRecord = {
    id: uuid(), //Se genera el ID 
    date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(), //se toma la fecha
    time: today.getHours(), //se toma la hora
    monotony,
    quote
  };

  records.push(newRecord); // se agrega el nuevo registro en el arreglo records
  const jsonRecords = JSON.stringify(records); // se transforma el arreglo en string JSON 
  fs.writeFileSync('src/records.json', jsonRecords, 'utf-8'); //se escriben (JSON) los datos en archivo record.json 

  res.redirect('/');
});
//1'00"45s
router.get('/delete/:id', (req, res) => {
  //console.log(req.params); //Recibe los parametros del método GET

  records = records.filter(record =>  record.id !== req.params.id );
  const jsonRecords = JSON.stringify(records); // se transforma el arreglo en string JSON 
  fs.writeFileSync('src/records.json', jsonRecords, 'utf-8'); //se escriben (JSON) los datos en archivo record.json 
  
  res.redirect('/');
});
router.get('/edit/:id', (req, res) => {
  recordToUpdate = records.filter(record => record.id === req.params.id);
  console.log(recordToUpdate);
  res.render('update.ejs', {
    record: recordToUpdate,
    title: 'Edit record' //devuelve un objeto con valores
  });
});
router.post('/update/:id', (req, res) => {
  //console.log(req.params); //Recibe los parametros del método GET
  //descontruye la variable
  console.log(req.body);
  const {
    monotony,
    quote
  } = req.body;
  //Se le asignan los valores a los variables 

  let newRecord = {
    id : req.params.id,
    date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(), //se toma la fecha
    time: today.getHours(), //se toma la hora
    monotony,
    quote
  };
  console.log(newRecord);   
  records = records.filter(record =>  record.id !== req.params.id );
  records.push(newRecord); // se agrega el nuevo registro en el arreglo records
  const jsonRecords = JSON.stringify(records); // se transforma el arreglo en string JSON 
  fs.writeFileSync('src/records.json', jsonRecords, 'utf-8'); //se escriben (JSON) los datos en archivo record.json 

  res.redirect('/');
});
  
module.exports = router;