const { Pokemon } = require('../../db');

const getPokemonByIdDB = async(req, res)=>{
    const {idPoke} = req.params;

    const pokemon = await Pokemon.findOne(
            {where:{
                id: idPoke
            }
            })

    return pokemon
}

module.exports = getPokemonByIdDB