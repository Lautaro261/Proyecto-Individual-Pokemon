import Card from "../Card/Card"
import {useDispatch, useSelector} from 'react-redux'
import style from './CardsContainer.module.css';
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import { getAllPokemons } from "../../redux/actions";

const Cards =(/* {pokemons} */)=>{
    
    const dispatch = useDispatch()
    const allPokemons = useSelector(state=>state.allPokemons)
    const filterPokemons = useSelector(state=>state.filterPokemons)
    const [pokemonPerPage, setPokemonPerPage ]= useState(12)
    const [currentPage, setcurrentPage]=useState(1);


    const lastIndex = currentPage * pokemonPerPage  // 1 * 12
    const firstIndex = lastIndex -  pokemonPerPage; // 12 - 12



   useEffect(()=>{

    console.log('allPokemons actualizado:', allPokemons)
    if(filterPokemons.length!==0){console.log('estaba vacio pero cambie')}

    return ()=>{
        //dispatch(getAllPokemons())
    }

   },[allPokemons, filterPokemons])
    
   //console.log('Rendering Cards with allPokemons:', allPokemons)
   
    return (
        <div>
         <div className={style.cards} >
            {/* <p>Cards</p> */}
            {allPokemons.length === 0 && <span>Cargando ... </span>}

            {filterPokemons.length === 0
  ? allPokemons.map((char, index) => (
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
      />
    )).slice(firstIndex, lastIndex)
}
            {/*allPokemons.map((char, index)=>{
                return (<Card
                 key={`${index}-${char.name}`} // <- Agregar esta línea
                id={char.id}
                name={char.name}
                image={char.image}
                types={char.types}
                />)
            }).slice(firstIndex, lastIndex)*/}
           
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