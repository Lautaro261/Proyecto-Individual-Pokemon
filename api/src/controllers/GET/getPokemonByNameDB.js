const { Pokemon } = require ('../../db.js');
const {Type}=require('../../db.js')


const getPokemonByNameDB = async(req, res)=>{
   // try {
       const {name}= req.query;
       const lowerCaseName = name.toLowerCase();
       //console.log(name);
       //console.log('ESTOY ENTRANDO A DB')
     const pokemonNameDB = await Pokemon.findOne({
      where: { name: lowerCaseName },
      include: [{ model: Type, attributes: ['name', 'id'], through: { attributes: [] } }],
    })
     //console.log(pokeresDB)
     return pokemonNameDB; // estoy haciendo la peticion a la base de datos joya
    //} catch (error) {
      // res.status(400).json(error.message)
    //}
   }

   module.exports= getPokemonByNameDB;