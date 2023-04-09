import { useEffect } from "react"
import { useSelector } from "react-redux"

const Pagination = ()=>{

    const allPokemons = useSelector(state=> state.allPokemons) 


    const pageNumber = [1,2,3]; // COMO LLENO EL ARRAY ?

    useEffect((

    )=>{},[allPokemons])

    return(
        <div>
            <button>Previous</button>
            <ul>
                {pageNumber.map((number)=>{
                    return (
                       /*  <li> */
                            <button>{number}</button>
                        /* </li> */
                    )
                })}
            </ul>
            <button>Netx</button>
        </div>
    )
}

export default Pagination