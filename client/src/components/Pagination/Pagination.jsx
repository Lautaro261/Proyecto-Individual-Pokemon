import { useEffect } from "react"
import { useSelector } from "react-redux"

const Pagination = ({pokemonPerPage,currentPage,setcurrentPage})=>{

    const allPokemons = useSelector(state=> state.allPokemons) 
    //const [pokemonPerPage, setPokemonPerPage ]= useState(12)
    //const [currentPage, setcurrentPage]=useState(1);

    const totalPokemons = allPokemons.length


    const pageNumber = []; // COMO LLENO EL ARRAY ?

     for(let i = 1; i<=Math.ceil(totalPokemons/pokemonPerPage) ; i++){
        pageNumber.push(i)
    } 


    const onClickPrevious=()=>{
        setcurrentPage(currentPage-1)
    }

    const onClickNext=()=>{
        setcurrentPage(currentPage+1)
    }

    const onClickCurrent=(event)=>{
        const value = parseInt(event.target.value) 
        setcurrentPage(value)
        console.log(value)
    }


    useEffect(()=>{
       // console.log(Math.ceil(totalPokemons/pokemonPerPage) )
    },[allPokemons])

    return(
        <div>
            <button onClick={onClickPrevious} /* FALTA LOGICA PARA DESACTIVAR EN pageNumber=0*/>Previous</button>
            <ul>
                {pageNumber.map((number)=>{
                    return (
                       /*  <li key={number}> */
                            <button value={number} onClick={onClickCurrent}>{number}</button>
                        /* </li> */
                    )
                })}
            </ul>
            <button onClick={onClickNext}/*FALTA LOGICA PARA DESACTIVAR EN pageNumber=fin*/>Netx</button>
        </div>
    )
}

export default Pagination