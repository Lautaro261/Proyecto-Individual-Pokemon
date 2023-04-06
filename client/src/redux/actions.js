import axios from 'axios';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_POKEMON_ID = 'GET_POKEMON_ID';
export const GET_POKEMON_BY_NAME= 'GET_POKEMON_BY_NAME';
export const FILTER_ID = 'FILTER_ID';
export const ORDER = 'ORDER';
export const ORDER_ID = 'ORDER_ID';


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

/* export const filterID = (id)=>{
    return {
        type: FILTER_ID, payload: id
    }
} */

export const OrderName = (value)=>{  // default, az o za
    return {
        type: ORDER, payload: value // puede ser A o D
    }
}

export const OrderId =(value)=>{ // default, id, type
    return {
        type: ORDER_ID, payload: value
    }
}