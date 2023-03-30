const { Type } = require('../db');
const getTypeAPI = require('../controllers/GET/getTypeAPI');

const handlerGetType = async(req, res)=>{
    try {
        //En una primera instancia, cuando la base de datos este vacía, 
        //deberás guardar todos los tipos que encuentres en la API.
        const typeDB = await Type.findAll()  // es una ARRAY 


        if(typeDB.length === 0){
            const objetResponse = await getTypeAPI()
            const { results } = objetResponse.data   // ARRAY con los types [{}, {}, {}]
            // console.log(results)
            await Promise.all(results.map(async(type)=>{                                                //CREO QUE SE PUEDE MEJORAR
                let {name}= type;
                //console.log(name)
                // por cada uno tengo que hacer agregar a la tabla 
                await Type.create({name})
                //return Type.create({})
            })) 
            //const exito = await Type.findAll() // ARRAY [{},{},{}]
            /* console.log(exito) */
            res.status(200).json('ok')

            
        }else{
            res.status(201).json(typeDB)
        }

    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports= handlerGetType;