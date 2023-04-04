import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonID } from "../../redux/actions";

const Detail =()=>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const pokemon = useSelector(state=>state.detailPokemon)

    useEffect(()=>{
        dispatch(getPokemonID(id))
    },[id])
    
    return (
        <div>
            <p>DETALLE DE POKEMON</p>
            <p>id: {pokemon.id}</p>
            <p>nombre: {pokemon.name} </p>
            <img src={pokemon.image} alt="pokex"/>
            <p>vida: {pokemon.hp}</p>
            <p>Ataque: {pokemon.attack}</p>
            <p>Defensa: {pokemon.defense}</p>
            <p>Velocidad: {pokemon.speed}</p>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            {/* <p>tipo: {pokemon.type}</p> */}

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