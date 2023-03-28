const { Router } = require('express');
const { getAllPokemons, getAPIPokemons, getDataBasePokemons} = require('../controllers/GET/getPokemons');
const getPokemonID = require("../controllers/GET/getPokemonID");



const routes = Router();

routes.get("/pokemons",  getAllPokemons );
routes.get("/pokemons/:idPoke", getPokemonID);

/* /pokemons/:idPokemon
Esta ruta obtiene el detalle de un pokemon específico. 
Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
El pokemon es recibido por parámetro (ID).
Tiene que incluir los datos del tipo de pokemon al que está asociado.
Debe funcionar tanto para los pokemones de la API como para los de la base de datos. */

module.exports = routes;
