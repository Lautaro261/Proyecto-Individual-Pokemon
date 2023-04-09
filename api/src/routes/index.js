const { Router } = require('express');
const pokesRouter = require("./PokemonsRouter");
const typeRouter = require("./TypeRouter");



const routes = Router();

routes.use("/pokemons" , pokesRouter);
routes.use("/types", typeRouter);




module.exports = routes;
