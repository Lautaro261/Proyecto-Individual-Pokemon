import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonID, clearDetail } from "../../redux/actions";
import { Link } from 'react-router-dom'
import style from "./Detail.module.css"

const Detail =()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const pokemon = useSelector(state=>state.detailPokemon)

    useEffect(()=>{
        dispatch(getPokemonID(id))
        return ()=>{
            dispatch(clearDetail())
        }
    },[dispatch,id])
    
    return (
        <div className={style.detail}>
            {Object.keys(pokemon).length === 0 ? <h2>Cargando...</h2>: null}

            <h2>{pokemon.name} </h2>
            <p>id: {pokemon.id}</p>
            <img src={pokemon.image} alt="pokex"/>
            <p>HP: {pokemon.hp}</p>
            <p>Ataque: {pokemon.attack}</p>
            <p>Defensa: {pokemon.defense}</p>
            <p>Velocidad: {pokemon.speed}</p>
            <p>Altura: {pokemon.height/10} m</p>
            <p>Peso: {pokemon.weight/10} kg</p>
            { pokemon.types && pokemon.types.map((type, index)=>{
                return (
                    <p key={index}>{type}</p>
                )
            })}
            <Link to='/home'>
            <button>back home</button>
            </Link>

        </div>
    )
}

export default Detail;

/*  id: 4,
    name: 'charmander',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    hp: 39,
    attack: 52,
    defense: 43,
    speed: 65,
    height: 6,
    weight: 85 */


/* ID.
Nombre.
Imagen.
Vida.
Ataque.
Defensa.
Velocidad (si tiene).
Altura (si tiene).
Peso (si tiene).
Tipo. */