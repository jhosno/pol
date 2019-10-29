const {
  Router
} = require('express');

const router = Router();

const uuid = require('uuid/v4');

const fs = require('fs');

const jsonRecords = fs.readFileSync('src/records.json','utf-8')
let records = JSON.parse(jsonRecords);
let today = new Date();


//con el router crear un el metodo get una ruta inicial 
router.get('/', (req, res) => {
  res.render('index.ejs', {
    records
  });
});

router.get('/new-record', (req, res) => {
  res.render('new-record.ejs')
})

//min 40 para las validaciones 
router.post('/new-record', (req, res) => {
  const {
    monotony,
    quote
  } = req.body;
  let newRecord = {
    id: uuid(),
    date: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
    time: today.getHours(),
    monotony,
    quote
  };
  records.push(newRecord);
  const jsonRecords = JSON.stringify(records);
  fs.writeFileSync('src/records.json', jsonRecords, 'utf-8');
  res.redirect('/');
})
//1'00"45s
module.exports = router;