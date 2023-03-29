//const { Pokemon } = require('../../db');
const axios = require('axios')
const getAllPokemonsDB = require('../handlers/getAllPokemonsDB');
const getALLPokemonsAPI = require('../handlers/getAllPokemonsAPI');
const getPokemonByNameDB = require('../handlers/getPokemonByNameDB');
const getPokemonByNameAPI = require('../handlers/getPokemonByNameAPI');
//const URL = 'https://pokeapi.co/api/v2/pokemon';
//const limit = '?limit=2'



const getAllPokemons = async(req, res)=>{

    if(req.query.name === undefined){
        try {
       
            const [pokemonsDB, pokemonsAPI] = await axios.all([getAllPokemonsDB(), getALLPokemonsAPI()])
            const allPokemons = [... pokemonsDB, ...pokemonsAPI]
            res.status(200).json(allPokemons)
        } catch (error) {
            res.status(403).json(error.message)
        }
    }
    if(req.query.name !==undefined){

        try {
           let pokemonByName = await getPokemonByNameDB(req, res)
           console.log(typeof(pokemonByName))
           console.log(pokemonByName)
           if(pokemonByName === null /*Object.keys(pokemonByName).length === 0 */){
             pokemonByName = await getPokemonByNameAPI(req, res)
           }
           // console.log(pokemonByName)
          res.status(200).json(pokemonByName)
         
        } catch (error) {
            res.status(404).json('NO se encontro POKEMON')
        }
        
    }
    
};

















module.exports= {
    getAllPokemons,
};