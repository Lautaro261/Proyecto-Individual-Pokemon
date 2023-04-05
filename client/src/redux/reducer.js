import { GET_ALL_POKEMONS, GET_POKEMON_ID, GET_POKEMON_BY_NAME} from "./actions";

const initialState={
    allPokemons:[],
    detailPokemon:{},
    //searchPokemon:{},
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){

        case GET_ALL_POKEMONS:
        return {...state, allPokemons: action.payload}

        case GET_POKEMON_ID:
            return {...state, detailPokemon: action.payload}

        case GET_POKEMON_BY_NAME:
            return {...state, allPokemons: action.payload}

        default:
            return {...state}
    }

}

export default rootReducer;