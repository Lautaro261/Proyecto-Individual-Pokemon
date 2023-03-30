const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";

const getTypeAPI = async(req, res)=>{
    const response = await axios.get(URL);
    //console.log(response.data)
    return response;
}

module.exports = getTypeAPI;