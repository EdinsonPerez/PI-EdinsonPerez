const { Router } = require('express');
const { Op } = require('sequelize')
const axios = require('axios')
const {Breeds, Temperaments} = require('../db')
const router = Router();

router.get('/', (req, res, next) => {
    let name = req.query.name
    let breedPromiseApi 
    let breedPromiseDb 

    if(name){
        breedPromiseApi = axios.get('https://api.thedogapi.com/v1/breeds/search?q=' + name) // promesa
        breedPromiseDb = Breeds.findAll({ //promesa
        include: Temperaments, 
        where: {
            name: {
                [Op.iLike]: "%" + name + "%"
            }
        },
        order: [
            ['name', 'ASC'],
            
        ],
    })
   


    }else {
        breedPromiseApi = axios.get('https://api.thedogapi.com/v1/breeds') // promesa
        breedPromiseDb = Breeds.findAll({ //promesa
        include: Temperaments,
        })

    }

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
                image: breed.image,
                temperament:breed.temperament,
                weight_min:breed.weight_min,
                weight_max:breed.weight_max,
                height_min:breed.weight_min,
                height_max:breed.weight_max,
                life_span:breed.life_span,
                breed_group:breed.breed_group
            }
        })
        //ordenar para ponerlos de menor a mayor
        let allBreeds = [...filteredBreedsApi,...breedDb]
        res.send(allBreeds)
    })
    .catch(error => next(error))
})

 router.get('/:id', async (req, res, next) => {
  try {
   const id = req.params.id;
  let breed
     if(typeof id === 'string' && id.length > 8) {
    //es de mi Bd
   breed = await Breeds.findByPk(id)
    
  }else{
    // es de la API
     response = await axios.get('https://api.thedogapi.com/v1/breeds/' + id)
     breed = response.data
    }  
    return res.status(201).send(breed)
  } catch(error) {
    next(error)
  }
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
        const {name, height_min, height_max,  weight_min, weight_max, life_span, temperament } = req.body;
        const newBreed = await Breeds.create({
            name,
            height_min,
            height_max,
            weight_min,
            weight_max,
            life_span,
            image: 'https://www.bing.com/th?id=OIP.0AxGzZKxi7KA3j_NKO7QdwHaEo&w=170&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        })
        .then((breed) => breed.setTemperaments(temperament))
        .then(res.send({ message: 'Created.!' }))
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