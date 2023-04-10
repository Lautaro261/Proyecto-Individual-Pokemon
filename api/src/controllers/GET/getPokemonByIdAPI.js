const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';


const getPokemonByIdAPI = async (req, res)=>{

    const {idPoke} = req.params

    const pokeRes = await axios.get(`${URL}/${idPoke}`)
    const pokeData = pokeRes.data

    const pokemon = {
        id: pokeData.id,
        name: pokeData.name,
        image: pokeData.sprites.front_default,
        hp: pokeData.stats[0].base_stat,
        attack: pokeData.stats[1].base_stat,
        defense: pokeData.stats[2].base_stat,
        speed: pokeData.stats[5].base_stat,
        height: pokeData.height,
        weight: pokeData.weight, 
        types: pokeData.types.map((type)=>type.type.name)
    } 
    
    return pokemon

}

module.exports = getPokemonByIdAPI