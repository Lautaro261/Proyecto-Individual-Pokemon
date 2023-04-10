const { Pokemon } = require('../../db');
const { Type }= require('../../db');

const getPokemonByIdDB = async (req, res) => {
  const { idPoke } = req.params;

  const resPokemon = await Pokemon.findOne({
    where: { id: idPoke },
    include: [{ model: Type, attributes: ['name'], through: { attributes: [] } }],
  })

  const pokemon = {
    id: resPokemon.id,
    name: resPokemon.name,
    image: resPokemon.image,
    hp: resPokemon.hp,
    attack: resPokemon.attack,
    defense: resPokemon.defense,
    speed: resPokemon.speed,
    height: resPokemon.height,
    weight: resPokemon.weight,
    types: resPokemon.types.map(type => type.name)
  };

  return pokemon;
}

module.exports = getPokemonByIdDB;