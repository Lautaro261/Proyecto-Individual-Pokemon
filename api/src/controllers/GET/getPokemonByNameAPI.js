const URL = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios')

const getPokemonByNameAPI = async(req, res)=>{

   console.log('entre en getPokemonByNameAPI :D')
   // try {
        const {name} = req.query
        const lowerCaseName = name.toLowerCase();
        //console.log(lowerCaseName)
        //console.log('ESTOY ENTRANDO EN API')
        const pokeRes = await axios.get(`${URL}/${lowerCaseName}`) // await axios.all([getDBPokemonsByName().getAPIPokemonByName()])
        

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
            types: pokeRes.data.types.map((type)=>type.type.name)

        }
        // console.log(pokemon);
       return pokemon; 
    //} catch (error) {
       // res.status(400).json({message: `No se contro pokemon con el nombre : ${name}`})
   // }
}

module.exports = getPokemonByNameAPI;