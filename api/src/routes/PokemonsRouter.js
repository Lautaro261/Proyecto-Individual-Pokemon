const { Router } =require("express");
const handlerGetPokemons = require('../handlers/handlerGetPokemons');
const handlerGetPokemonByID = require('../handlers/handlerGetPokemonByID');
const handlerPostPokemonDB = require('../handlers/handlerPostPokemonDB');
//const handlerGetType = require("../controllers/handlers/handlerGetType");

const pokesRouter = Router();

pokesRouter.get("/", handlerGetPokemons);  // ENTRA http://localhost:3001/pokemons/?name=ola 

pokesRouter.get("/:idPoke", handlerGetPokemonByID);

pokesRouter.post("/", handlerPostPokemonDB);

// pokesRouter.get("/type", handlerGetType);


module.exports = pokesRouter;