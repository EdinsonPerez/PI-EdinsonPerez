const { Router } = require('express');
const {Breeds} = require('../db')
const router = Router();

router.get('/', (req, res, next) => {
    return Breeds.findAll()
    .then((breeds) => {
        res.send(breeds)
    })
    .catch((error) =>{
        next(error)
    })
})

router.post('/', async (req, res, next) => {
    try {
        const {name, image} = req.body;
        const newBreed = await Breeds.create({
            name,
            image
        })
        res.status(201).send(newBreed)
    } catch(error){
        next(error)
    }
})

router.put('/', (req, res, next) => {
    res.send('soy put /breeds')
})

router.delete('/', (req, res, next) => {
    res.send('soy delete /breeds')
})

module.exports = router;