import Card from "../Card/Card"
import { useSelector} from 'react-redux'
import style from './CardsContainer.module.css';
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const Cards =(/* {pokemons} */)=>{
    
    //const dispatch = useDispatch()
    const allPokemons = useSelector(state=>state.allPokemons)
    const filterPokemons = useSelector(state=>state.filterPokemons)
    const [pokemonPerPage, setPokemonPerPage ]= useState(12)
    const [currentPage, setcurrentPage]=useState(1);


    const lastIndex = currentPage * pokemonPerPage  // 1 * 12  = 12
    const firstIndex = lastIndex -  pokemonPerPage; // 12 - 12 = 0 



   useEffect(()=>{

   // console.log('allPokemons actualizado:', allPokemons)
    if(filterPokemons.length!==0){console.log('estaba vacio pero cambie')}

    return ()=>{
        //dispatch(getAllPokemons())
    }

   },[allPokemons, filterPokemons])
    
   //console.log('Rendering Cards with allPokemons:', allPokemons)
   
    return (
        <div className={style.contenedor}>
         <div className={style.cards} >

            {allPokemons.length === 0 && <img src='../../recursos/pokeball.gif' alt="loading..."/>}

            {filterPokemons.length === 0 ? allPokemons.map((char, index) => (
            <Card
            key={`${index}-${char.name}`}
            id={char.id}
            name={char.name}
            image={char.image}
            types={char.types}
            />
            )).slice(firstIndex, lastIndex)
            : filterPokemons.map((char, index) => (
            <Card
            key={`${index}-${char.name}`}
            id={char.id}
            name={char.name}
            image={char.image}
            types={char.types}
            />)).slice(firstIndex, lastIndex)}

    
           
         </div>
         <div>
            <Pagination 
            pokemonPerPage= {pokemonPerPage}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
            />
         </div>
        </div>
    )
}

export default Cards;