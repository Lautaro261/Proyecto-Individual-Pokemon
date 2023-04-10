const postPokemon = require('../controllers/POST/postPokemon');


const handlerPostPokemonDB = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, types } = req.body;

    const poke = await postPokemon(
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    );
   // const typ = await postType(types);
    // console.log(typ)                            TENGO QUE RELACIONAR EL POKEMON CON SU TYPE FALTA!!!
    const typesArray = types.map(type => type.name)

    //console.log(types)
    const newPokemon = {
      name: poke.name,
      image: poke.image,
      hp: poke.hp,
      attack: poke.attack,
      defense: poke.defense,
      speed: poke.speed,
      height: poke.height,
      weight: poke.weight,
      //types: typesArray,
     };

   // console.log(newPokemon)
    res.status(201).json({
      message: 'Se creó correctamente',
      newPokemon: newPokemon,
    });

  } catch (error) {
    res.status(400).json(error.message)
  }
};

module.exports = handlerPostPokemonDB;
