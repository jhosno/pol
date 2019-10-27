const { Router } = require('express');
 
const router = Router();

const records = [];

//con el router crear un el metodo get una ruta inicial 
router.get('/', (req, res) => {
    res.render('index.ejs');
  });
 
router.get('/new-record', (req, res) => {
  res.render('new-record.ejs')
})
router.post('/new-record', (req, res) => {
  console.log(req.body);
  const message = 'Your record is saved! :)';
  res.render('index.ejs').send(message);
})

module.exports = router;