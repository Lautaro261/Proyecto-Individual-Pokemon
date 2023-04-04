import { GET_ALL_POKEMONS, GET_POKEMON_ID } from "./actions";

const initialState={
    allPokemons:[],
    detailPokemon:{},
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){

        case GET_ALL_POKEMONS:
        return {...state, allPokemons: action.payload}

        case GET_POKEMON_ID:
            return {...state, detailPokemon: action.payload}

        default:
            return {...state}
    }

}

export default rootReducer;