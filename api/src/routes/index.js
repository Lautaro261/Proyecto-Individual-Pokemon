const { Router } = require('express');
const { getAllPokemons, getAPIPokemons, getDataBasePokemons} = require('../controllers/GET/getPokemons');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const routes = Router();

routes.get("/pokemons",  getAPIPokemons );



module.exports = routes;
