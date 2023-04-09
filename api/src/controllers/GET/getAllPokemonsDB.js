const { Pokemon } = require('../../db')

const getAllPokemonsDB = async (req, res)=>{
    //try {
        const responseDB = await Pokemon.findAll()
        const pokemonsDB = responseDB.map((char)=>{
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
        return pokemonsDB;
        /* res.status(200).json(pokeDB) */
    //} catch (error) {
        /* res.status(404).json(error.message) */
       // console.log(error)
   // }

}

module.exports = getAllPokemonsDB