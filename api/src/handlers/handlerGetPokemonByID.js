const getPokemonByIdDB = require('../controllers/GET/getPokemonByIdDB');
const getPokemonByIdAPI = require('../controllers/GET/getPokemonByIdAPI');



const handlerGetPokemonByID = async (req, res)=>{
    const {idPoke} = req.params;

    try {
       if(idPoke.length < 5){
        // Peticion a la API
        const pokemon = await getPokemonByIdAPI(req, res)
        res.status(200).json(pokemon)

       }else{
        //Peticion a Base Data
        const pokemon = await getPokemonByIdDB(req,res)
        res.status(200).json(pokemon)   
       }  
 } catch (error) {
    res.status(404).json({message: `No se encontró pokemon por el ID ${idPoke}`})
 }

};





module.exports = handlerGetPokemonByID;