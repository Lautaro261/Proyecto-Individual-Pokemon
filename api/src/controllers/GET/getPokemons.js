const { Pokemon } = require('../../db');
const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon';
const limit = '?limit=2'

//AQUI TENGO QUE MANEJAR REQ.QUERY :D

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

/* const getAPIPokemonByName = async(req, res)=>{
    const {name}= req.query;
    const response = await axios.get(`${URL}/${name}`)

}

const getDBPokemonsByName = ()=>{

} */


const getAllPokemons = async(req, res)=>{

    if(req.query.name === undefined){
        try {
       
            const [pokesDB, pokesAPI] = await axios.all([getDataBasePokemons(), getAPIPokemons()])
            const allPokemons = [... pokesDB, ...pokesAPI]
            res.status(200).json(allPokemons)
        } catch (error) {
            res.status(403).json(error.message)
        }
    }
    if(req.query.name !==undefined){

        try {
            const {name} = req.query
        console.log(name)
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



        res.status(201).json(pokemon)
        // ME FALTA TRAER DE BASE DE DATOS
            
        } catch (error) {
            res.status(404).json('NO se encontro POKEMON')
        }
        
    }
    
};

















module.exports= {
    getAllPokemons,
    getAPIPokemons,
    getDataBasePokemons,
};