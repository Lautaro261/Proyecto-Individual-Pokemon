const URL = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios')

const getPokemonByNameAPI = async(req, res)=>{
    try {
        const {name} = req.query
        console.log(name)
        console.log('ESTOY ENTRANDO EN API')
        const pokeRes = await axios.get(`${URL}/${name}`) // await axios.all([getDBPokemonsByName().getAPIPokemonByName()])
        
        const pokemon = {
            id: pokeRes.data.id,
            name: pokeRes.data.name,
            image: pokeRes.data.sprites.front_default,
            hp: pokeRes.data.stats[0].base_stat,
            attack: pokeRes.data.stats[1].base_stat,
            defense: pokeRes.data.stats[2].base_stat,
            speed:pokeRes.data.stats[5].base_stat,
            height: pokeRes.data.height,
            weight: pokeRes.data.weight, 
        }
        // console.log(pokemon);
       return pokemon; 
    } catch (error) {
        res.status(400).send('mal get name de api')
    }
}

module.exports = getPokemonByNameAPI;