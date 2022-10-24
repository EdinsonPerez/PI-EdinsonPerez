const { Router } = require('express');
const breedRoute = require('./breeds')
const temperamentRoute = require('./temperaments')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/breeds', breedRoute); // /api/breeds/*
router.use('/temperaments', temperamentRoute); // /api/temperaments/*

module.exports = router;
