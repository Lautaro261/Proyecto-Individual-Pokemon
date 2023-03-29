const { Router } =require("express");
const { getAllPokemons } = require("../controllers/GET/getPokemons");
const getPokemonID = require("../controllers/GET/getPokemonByID");
const getPokemonsByName = require("../controllers/GET/getPokemonByName");

const pokesRouter = Router();

pokesRouter.get("/", getAllPokemons);  // ENTRA http://localhost:3001/pokemons/?name=ola 

pokesRouter.get("/:idPoke", getPokemonID);


module.exports= pokesRouter;