const { Type } = require('../../db');
const getTypeAPI = require('../GET/getTypeAPI');

const handlerGetType = async(req, res)=>{
    try {
        //En una primera instancia, cuando la base de datos este vacía, 
        //deberás guardar todos los tipos que encuentres en la API.
        const typeDB = await Type.findAll()  // es una ARRAY 


        if(typeDB.length === 0){
            const typesAPI = await getTypeAPI()

            console.log(typesAPI.data)

            res.status(200).json(typesAPI.data)
            
        }

       // res.status(201).json(typesAPI)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports= handlerGetType;