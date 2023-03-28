const { Pokemon } = require('../../db');
const axios = require('axios')
const URL = 'https://pokeapi.co/api/v2/pokemon';
const limit = '?limit=5'



const getDataBasePokemons = async (req, res)=>{
    try {
        const responseDB = await axios.get("")
    } catch (error) {
        
    }

}




const getAPIPokemons = async(req, res)=>{
    try {
        const responseAPI = await axios.get(`${URL}${limit}`)
        const arrayPeticiones = responseAPI.data?.results.map((char)=>{
            return axios.get(char.url)
        }) 
        const pokes = await axios.all(arrayPeticiones)
        console.log(arrayPeticiones)

        


        res.status(200).json(arrayPeticiones)




        /*const apiAllPokes = await axios.get(`${API_URL_POKES}?limit=40`);   
         console.log('apiAllPokes')
        console.log(apiAllPokes) 
        const apiPokes = apiAllPokes.data?.results.map(e => axios.get(e.url)); //ingreso a todos los urls
         console.log('apiPokes')
        console.log(apiPokes)   
        const pokesUrlInfo = await axios.all(apiPokes) //espero a que se cumplan todas las promises 
         console.log('pokesUrlInfo')
        console.log(pokesUrlInfo.length)   */




    } catch (error) {
        res.status(400).json(error.message)
    }

}





const getAllPokemons =(req, res)=>{
    return Pokemon
};

















module.exports= {
    getAllPokemons,
    getAPIPokemons,
};