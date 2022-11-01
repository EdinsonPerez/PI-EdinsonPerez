const { Router } = require('express');
const router = Router();
const {Temperaments} = require('../db');


// router.get('/', async (req, res, next) => {
//     try {
//         const temperament = await Temperaments.findAll()
//         res.send(temperament)
//     } catch(error){
//         next(error)
// }
// })

router.get('/', async (req, res, next) => {
    try {
        const temperamentApi = await axios.get('https://api.thedogapi.com/v1/breeds')
      console.log(temperamentApi)
        const tem = temperamentApi.data.map(el => el.temperament);
        console.log(tem)
      const tempEach = tem.toString().split(",");
        console.log(tempEach)
        tempEach.forEach(el => {
             Temperaments.findOrCreate({
              where: { name: el }
          })
      })
      const allTemps = await Temperaments.findAll();
      res.send(allTemps); 
         
  }catch(error){
    next(error)
  }
  })

router.post('/', (req, res, next) => {
    const {name} = req.body
    return Temperaments.create({name})
    .then((newTemperament) => {
        res.status(201).send(newTemperament)
    })
    .catch(error => next(error))
})

router.put('/', (req, res, next) => {
    res.send('soy put /temperaments')
})

router.delete('/', (req, res, next) => {
    res.send('soy delete /temperaments')
})


module.exports = router;