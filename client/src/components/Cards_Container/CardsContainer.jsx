import Card from "../Card/Card"
import {useSelector} from 'react-redux'

const Cards =(/* {pokemons} */)=>{

    const allPokemons = useSelector(state=>state.allPokemons)

    

    // console.log (pokemons)
    return (
        <div>
            <p>Cards</p>
            {allPokemons.map((char, index)=>{
                return (<Card
                key={index}
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