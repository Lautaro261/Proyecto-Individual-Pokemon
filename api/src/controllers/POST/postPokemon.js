const { Pokemon } = require ("../../db.js");
const { Type } = require('../../db.js');

const postPokemon = async(name, image, hp, attack, defense, speed, height, weight, types )=>{

    const newPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, height, weight})

    console.log(types);

    const typesByDB = await Type.findAll({where: {id: types}}) // YA TENGO LOS REGISTROS DE MI DB QUE COINCIDEN CON LOS TYPE.BODY
    //console.log( typesByDB)
    await newPokemon.addType(typesByDB)

    console.log(newPokemon)
    return newPokemon
};
// ariel orm 1:20 
module.exports = postPokemon;