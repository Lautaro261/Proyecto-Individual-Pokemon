const { Pokemon } = require ('../../db.js');
const {Type}=require('../../db.js')

const getPokemonByNameDB = async(req, res)=>{
    const {name}= req.query;
    const lowerCaseName = name.toLowerCase();

    const resPokemonNameDB = await Pokemon.findOne({
        where: { name: lowerCaseName },
        include: [{ model: Type, attributes: ['name'], through: { attributes: [] } }],
    })

    if(!resPokemonNameDB){
        return null
    }

    const pokemonNameDB = {
        id: resPokemonNameDB.id,
        name: resPokemonNameDB.name,
        image: resPokemonNameDB.image,
        hp: resPokemonNameDB.hp,
        attack: resPokemonNameDB.attack,
        defense: resPokemonNameDB.defense,
        speed: resPokemonNameDB.speed,
        height: resPokemonNameDB.height,
        weight: resPokemonNameDB.weight,
        types: resPokemonNameDB.types.map(type => type.name)
    }

    return pokemonNameDB;
}

module.exports= getPokemonByNameDB;