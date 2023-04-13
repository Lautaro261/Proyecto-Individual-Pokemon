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
            <div className={style.pokemon}>
              {Object.keys(pokemon).length === 0 ? <h2>Loading...</h2>: null}

              <h2>{pokemon.name} </h2>
              {/* <p>id: {pokemon.id}</p> */}
              <img src={pokemon.image} alt="pokex"/>
              <p>HP:   {pokemon.hp}</p>
              <p>Attack:   {pokemon.attack}</p>
              <p>Defense:   {pokemon.defense}</p>
              <p>Speed:   {pokemon.speed}</p>
              <p>height:   {pokemon.height/10} m</p>
              <p>weight:   {pokemon.weight/10} kg</p>
              { pokemon.types && pokemon.types.map((type, index)=>{
                  return (
                      <p key={index}>type:  {type}</p>
                  )
              })}
            </div>
            <div className={style.back}>
                <Link to='/home'>
                    <button>back home</button>
                </Link>

            </div>

        </div>
    )
}

export default Detail;
