const { Router } = require('express');
const router = Router();
const {Temperaments} = require('../db');


router.get('/', async (req, res, next) => {
    try {
        const temperament = await Temperaments.findAll()
        res.send(temperament)
    } catch(error){
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