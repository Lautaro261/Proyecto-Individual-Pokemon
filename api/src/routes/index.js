const { Router } = require('express');
const pokesRouter = require("./PokemonsRouter");
const typeRouter = require("./TypeRouter");
/* const { getAllPokemons, getAPIPokemons, getDataBasePokemons} = require('../controllers/GET/getPokemons');
const getPokemonID = require("../controllers/GET/getPokemonID");
const getPokemonsByName= require("../controllers/GET/getPokemonByName"); */



const routes = Router();

routes.use("/pokemons" , pokesRouter);
routes.use("/type", typeRouter);
//routes.use("/pokemons",  getAllPokemons );     // *FALTA TRAER LOS TIPOS DE POKEMONS
//routes.get("/pokemons/:idPoke", getPokemonID); // *FALTA TRAER LOS TIPOS DE POKEMONS
//routes.get("/pokemons/name", getPokemonsByName);




module.exports = routes;
