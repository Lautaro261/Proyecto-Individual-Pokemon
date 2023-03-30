const { Pokemon } = require('../models/Pokemon')
const axios = require("axios");
const URL = 'https://pokeapi.co/api/v2/pokemon';



const handlerGetPokemonByID = async (req, res)=>{
    const {idPoke} = req.params;

    try {
       if(idPoke.length < 5){

        // Peticion a la API
        const response = await axios.get(`${URL}/${idPoke}`)
        const pokeData = response.data
        console.log(pokeData.name)
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
        } 
        res.status(200).json(pokemon)
           
       }else{
        //Peticion a Base Data
        const response = await Pokemon.findOne(
            {where:{
                id: idPoke
            }
            })
        res.status(200).json(response)   
       }  
 } catch (error) {
    console.log('estoy entrando al getPokemonBYID')
    res.status(404).json(error)
 }

};





module.exports = handlerGetPokemonByID;