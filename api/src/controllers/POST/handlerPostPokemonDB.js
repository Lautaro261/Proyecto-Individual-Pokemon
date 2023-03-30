const postPokemon = require("../postPokemon");
const postType = require("../postType");


const handlerPostPokemonDB = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, type } = req.body;

    const poke = await postPokemon(
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    );
    const typ = await postType(type);
    const newPokemon = {...poke};

    console.log(newPokemon)
    res.status(201).json(newPokemon);

  } catch (error) {
    res.status(400).json(error.message)
  }
};

module.exports = handlerPostPokemonDB;
