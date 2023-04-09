import Card from "../Card/Card"
import {useSelector} from 'react-redux'
import style from './CardsContainer.module.css';
import { useEffect } from "react";

const Cards =(/* {pokemons} */)=>{

    const allPokemons = useSelector(state=>state.allPokemons)

   useEffect(()=>{
    console.log('allPokemons actualizado:', allPokemons)

   },[allPokemons])
    
   //console.log('Rendering Cards with allPokemons:', allPokemons)
   
    return (
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
            })}
           
        </div>
    )
}

export default Cards;