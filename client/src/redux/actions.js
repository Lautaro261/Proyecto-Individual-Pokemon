import axios from 'axios';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_ID = 'GET_POKEMON_ID';
export const GET_POKEMON_BY_NAME= 'GET_POKEMON_BY_NAME';


export const getAllPokemons = ()=>{

    return async function(dispatch){
        try {
            const response = await axios.get('http://localhost:3001/pokemons')
            return dispatch ({type: GET_ALL_POKEMONS, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}


export const getPokemonID = (id)=>{
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({type:GET_POKEMON_ID, payload: response.data})
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const getPokemonByName = (name)=>{
    return async function(dispatch){
        try {
            const nameMin = name.toLowerCase()
            const response = await axios.get(`http://localhost:3001/pokemons/?name=${nameMin}`)
            return dispatch({type: GET_POKEMON_BY_NAME, payload:[response.data]})
        } catch (error) {
            console.log(error.message);
        }
    }
}