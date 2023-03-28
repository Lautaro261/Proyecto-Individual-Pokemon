const { Pokemon } = require('../../db');
const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon';
const limit = '?limit=2'



const getDataBasePokemons = async (req, res)=>{
    try {
        const responseDB = await Pokemon.findAll()
        const pokeDB = responseDB.map((char)=>{
            return{
                id: char.id,
                name: char.name,
                image: char.image,
                hp: char.hp,
                attack: char.attack,
                defense: char.defense,
                speed: char.speed,
                height: char.height,
                weight: char.weight,
            }
        })
        return pokeDB;
        /* res.status(200).json(pokeDB) */
    } catch (error) {
        /* res.status(404).json(error.message) */
        console.log(error)
    }

}




const getAPIPokemons = async(req, res)=>{
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

        const pokemons = datas.map((pokemon)=>{
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
        /* res.status(200).json(pokemons) */
        return pokemons

    } catch (error) {
        /* res.status(400).json(error.message) */
        console.log(error)
    }

}





const getAllPokemons = async(req, res)=>{
    

    try {
        

        console.log(getAPIPokemons())
        const [pokesDB, pokesAPI] = await axios.all([getDataBasePokemons(), getAPIPokemons()])
       
        /* return [... pokesDB, ...pokesAPI] */
        const allPokemons = [... pokesDB, ...pokesAPI]
        res.status(200).json(allPokemons)
    } catch (error) {
        
        res.status(403).json(error.message)
        console.log(error)
    }
};

















module.exports= {
    getAllPokemons,
    getAPIPokemons,
    getDataBasePokemons,
};