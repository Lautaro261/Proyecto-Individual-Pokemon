const { Pokemon } = require('../../db');
const { Type }= require('../../db');

const getPokemonByIdDB = async(req, res)=>{
    const {idPoke} = req.params;

    const pokemon = await Pokemon.findOne({
        where:{id: idPoke},
        include: [{ model: Type, attributes: ['name', 'id'], through: { attributes: [] } }],
            })

    return pokemon
}

module.exports = getPokemonByIdDB