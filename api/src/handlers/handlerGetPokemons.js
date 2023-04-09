const axios = require('axios')
const getAllPokemonsDB = require('../controllers/GET/getAllPokemonsDB');
const getALLPokemonsAPI = require('../controllers/GET/getAllPokemonsAPI');
const getPokemonByNameDB = require('../controllers/GET/getPokemonByNameDB');
const getPokemonByNameAPI = require('../controllers/GET/getPokemonByNameAPI');




const handlerGetPokemons = async(req, res)=>{

//--------------------------GET ALL----------------------------------------------
    if(req.query.name === undefined){
        try {
            const [pokemonsDB, pokemonsAPI] = await axios.all([getAllPokemonsDB(), getALLPokemonsAPI()])
            const allPokemons = [... pokemonsDB, ...pokemonsAPI]
            res.status(200).json(allPokemons)
        } catch (error) {
            res.status(404).json(error.message)
        }
    }

//--------------------------GET POR NAME-----------------------------------------------------------
    
    if(req.query.name !==undefined){
        const {name} = req.query;
        try {
           let pokemonByName = await getPokemonByNameDB(req, res)
           // console.log(typeof(pokemonByName))
           // console.log(pokemonByName)
           if(pokemonByName === null /*Object.keys(pokemonByName).length === 0 */){
             pokemonByName = await getPokemonByNameAPI(req, res)
           }
           // console.log(pokemonByName)
           /* if(pokemonByName === nul ){
            throw new Error('NO SE ENCONTRO EL POKEMON POR SU NOMBRE ')
           } */
          res.status(200).json(pokemonByName)

         /*  if (pokemonByName === null || Object.keys(pokemonByName).length === 0) {
            res.status(404).json({ message: 'NO SE ENCONTRO EL POKEMON POR SU ' });
        } else {
            res.status(200).json(pokemonByName);
        } */
         
        } catch (error) {
            res.status(404).json({message: `No se encontró el pokemon con el nombre ${name}`})
        }
        
    }
    
};

















module.exports= handlerGetPokemons;