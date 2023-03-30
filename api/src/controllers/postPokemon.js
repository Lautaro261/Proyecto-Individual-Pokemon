const { Pokemon } = require ("../db.js");

const postPokemon = async(name, image, hp, attack, defense, speed, height, weight )=>{
    const newPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, height, weight})
    console.log(newPokemon)
    return newPokemon
};

module.exports = postPokemon;