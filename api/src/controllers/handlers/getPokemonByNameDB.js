const { Pokemon } = require ('../../db.js');


const getPokemonByNameDB = async(req, res)=>{
    try {
       const {name}= req.query;
       //console.log(name);
       //console.log('ESTOY ENTRANDO A DB')
     const pokemonNameDB = await Pokemon.findOne({where: {name:name}})
     //console.log(pokeresDB)
     return pokemonNameDB; // estoy haciendo la peticion a la base de datos joya
    } catch (error) {
       res.status(400).json(error.message)
    }
   }

   module.exports= getPokemonByNameDB;