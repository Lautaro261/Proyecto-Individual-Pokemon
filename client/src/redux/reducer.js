import { 
    GET_ALL_POKEMONS, 
    GET_POKEMON_ID, 
    GET_POKEMON_BY_NAME, 
    FILTER_ID, 
    ORDER,
    ORDER_ID
} from "./actions";
//import handlerPayload from "./helpers/handlerPayload";

const initialState={
    allPokemons:[],
    detailPokemon:{},
    auxiliar:[],
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
        
        case FILTER_ID:
           // return{...state, myfavorites: action.payload // state.myfavorites.filter((char)=>char.id!==action.payload)
            return {...state, allPokemons: state.allPokemons.filter((char)=> char.id !== action.payload)}

        case ORDER:
            // LOGICA
            const payload = action.payload 
            if (payload === 'az') {
                state.allPokemons.sort((a, b) => {
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
                state.allPokemons.sort((a, b) => {
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
                state.allPokemons.sort((a, b) => {
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
                state.allPokemons.sort((a, b) => {
                    if (a.attack > b.attack) {
                        return 1;
                    } else if (a.attack < b.attack) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            }


            return { ...state, allPokemons: [...state.allPokemons] }; 

        case ORDER_ID:
            if(action.payload === 'id'){
                state.allPokemons.sort((a,b)=>{
                    if(a.id > b.id){
                        return 1
                    }else if(a.id < b.id){
                        return -1
                    }else{
                        return 0
                    }
                })
            }
            return {...state, allPokemons: [...state.allPokemons] };

        default:
            return {...state}
    }

}

export default rootReducer;