const postPokemon = require("../postPokemon");

const handlerPostPokemonDB = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight } = req.body;

    const newPokemon = await postPokemon(
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight
    );
    //console.log(newPokemon)
    res.status(201).json(newPokemon);

  } catch (error) {
    res.status(400).json(error.message)
  }
};

module.exports = handlerPostPokemonDB;
