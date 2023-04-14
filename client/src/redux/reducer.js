import { 
    GET_ALL_POKEMONS, 
    GET_POKEMON_ID, 
    GET_POKEMON_BY_NAME,
    GET_ALL_TYPES,
    FILTER_ID, 
    FILTER_TYPES,
    CLEAR_FILTER,
    ORDER,
    CLEAR_DETAIL,
} from "./actions";
//import handlerPayload from "./helpers/handlerPayload";

const initialState={
    allPokemons:[],
    detailPokemon:{},
    allTypes:[],
    filterPokemons:[],
    
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){

        case GET_ALL_POKEMONS:
        return {...state, allPokemons: action.payload}

        case GET_POKEMON_ID:
            return {...state, detailPokemon: action.payload}

        case CLEAR_DETAIL:
            return {...state, detailPokemon: {}}

        case GET_POKEMON_BY_NAME:
           // console.log(action.payload)
            return {...state, allPokemons: action.payload}

        case GET_ALL_TYPES: 
        return{...state, allTypes: action.payload}
        
        case FILTER_ID:
           // return{...state, myfavorites: action.payload // state.myfavorites.filter((char)=>char.id!==action.payload)
          // console.log(action.payload, 'ESTO ES LINE 32')
            return {...state, allPokemons: state.allPokemons.filter((char)=> typeof(char.id) === action.payload)}
            // SI ES VERDAD AGREGA AL ARRAY Y RETORNA                                             string

        case FILTER_TYPES:
            //console.log(typeof(action.payload), action.payload)  // 'normal'
            //console.log(state.allPokemons[0].types.includes(action.payload))
            
            return{...state,  filterPokemons: state.allPokemons.filter((char)=> char.types.includes(action.payload)) }


        case CLEAR_FILTER: 
            return {...state, filterPokemons: []}

        case ORDER:
            // LOGICA
            let stateNew
            if(state.filterPokemons.length === 0){
                stateNew = state.allPokemons
            }else{
                stateNew = state.filterPokemons
            }

            const payload = action.payload 
            if (payload === 'az') {
                stateNew.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else if (a.name < b.name) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            } 
            if (payload === 'za') {
                stateNew.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    } else if (a.name < b.name) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }

            if (payload === 'ha') {
                stateNew.sort((a, b) => {
                    if (a.attack > b.attack) {
                        return -1;
                    } else if (a.attack < b.attack) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
            if (payload === 'la') {
                stateNew.sort((a, b) => {
                    if (a.attack > b.attack) {
                        return 1;
                    } else if (a.attack < b.attack) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }


            return { ...state, allPokemons: [...stateNew] }; 

        default:
            return {...state}
    }

}

export default rootReducer;