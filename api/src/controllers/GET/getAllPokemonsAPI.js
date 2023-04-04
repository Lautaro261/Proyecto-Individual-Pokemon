const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';
const limit = '?limit=12'


const getALLPokemonsAPI = async(req, res)=>{
    try {
        const responseAPI = await axios.get(`${URL}${limit}`)
        const array1results = responseAPI.data.results  // es una array 
        //console.log(`ESTO ES array1results ${array1results}`)

         const arrayPeticiones = array1results.map((char)=>{
           // console.log(char.url)
            return axios.get(char.url)}) 
            //console.log(`ESTO ES arrayPeticiones ${arrayPeticiones}`) 

        const pokes = await axios.all(arrayPeticiones)

        let datas = pokes?.map((x)=>{
            //console.log(x.data.name)
            return x.data})  

        const pokemonsAPI = datas.map((pokemon)=>{
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                height: pokemon.height,
                weight: pokemon.weight,
            }
        })
        // res.status(200).json(pokemons) 
        return pokemonsAPI

    } catch (error) {
        // res.status(400).json(error.message) 
        console.log(error)
    }
}

module.exports = getALLPokemonsAPI;