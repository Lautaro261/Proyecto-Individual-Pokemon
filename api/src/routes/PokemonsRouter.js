const { Router } =require("express");
const handlerGetPokemons = require("../controllers/GET/handlerGetPokemons");
const getPokemonID = require("../controllers/GET/getPokemonByID");
const handlerPostPokemonDB = require("../controllers/POST/handlerPostPokemonDB");
//const handlerGetType = require("../controllers/handlers/handlerGetType");

const pokesRouter = Router();

pokesRouter.get("/", handlerGetPokemons);  // ENTRA http://localhost:3001/pokemons/?name=ola 

pokesRouter.get("/:idPoke", getPokemonID);

pokesRouter.post("/", handlerPostPokemonDB);

// pokesRouter.get("/type", handlerGetType);


module.exports = pokesRouter;