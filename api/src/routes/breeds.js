const { Router } = require('express');
const axios = require('axios')
const {Breeds, Temperaments} = require('../db')
const router = Router();

router.get('/', (req, res, next) => {
    let breedPromiseApi = axios.get('https://api.thedogapi.com/v1/breeds') // promesa
    let breedPromiseDb = Breeds.findAll({ //promesa
        include: Temperaments
    })
    Promise.all([
        breedPromiseApi,
        breedPromiseDb
    ])
    .then((respuesta) => {
        const [
            breedApi,//respuesta de la APÏ
             breedDb //respuesta de mi base de datos
            ] = respuesta // mis respuestas
        let filteredBreedsApi = breedApi.data.map((breed)=> {
            return {
                id: breed.id,
                name: breed.name,
                image: breed.image

            }
        })
        let allBreeds = [...filteredBreedsApi, ...breedDb]
        res.send(allBreeds)
    })
})
// router.get('/', (req, res, next) => {
//     return Breeds.findAll({
//         include: Temperaments
//     })
//     .then((breeds) => {
//         res.send(breeds)
//     })
//     .catch((error) =>{
//         next(error)
//     })
// })
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
 
router.post('/:breedId/temperament/:temperamentId', async (req, res, next) => {
    try {
        const{breedId, temperamentId } = req.params;
        const breed = await Breeds.findByPk(breedId)
        await breed.addTemperament(temperamentId)
        res.send(200)
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