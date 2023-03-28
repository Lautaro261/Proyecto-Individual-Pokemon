const { Router } = require('express');
const { getAllPokemons, getAPIPokemons} = require('../controllers/GET/getPokemons');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const routes = Router();

routes.get("/pokemons", /* getAllPokemons */ getAPIPokemons);



module.exports = routes;
