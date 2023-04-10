import Card from "../Card/Card"
import {useSelector} from 'react-redux'
import style from './CardsContainer.module.css';
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const Cards =(/* {pokemons} */)=>{
    
    const allPokemons = useSelector(state=>state.allPokemons)
    const [pokemonPerPage, setPokemonPerPage ]= useState(12)
    const [currentPage, setcurrentPage]=useState(1);


    const lastIndex = currentPage * pokemonPerPage  // 1 * 12
    const firstIndex = lastIndex -  pokemonPerPage; // 12 - 12



   useEffect(()=>{
    console.log('allPokemons actualizado:', allPokemons)

   },[allPokemons])
    
   //console.log('Rendering Cards with allPokemons:', allPokemons)
   
    return (
        <div>
         <div className={style.cards} >
            {/* <p>Cards</p> */}
            {allPokemons.map((char, index)=>{
                return (<Card
                 key={`${index}-${char.name}`} // <- Agregar esta línea
                id={char.id}
                name={char.name}
                image={char.image}
                type={char.type}
                />)
            }).slice(firstIndex, lastIndex)}
           
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