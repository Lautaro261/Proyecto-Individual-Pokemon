import { useEffect } from "react"
import { useSelector } from "react-redux"
import style from './Pagination.module.css';

const Pagination = ({pokemonPerPage,currentPage,setcurrentPage})=>{

    const allPokemons = useSelector(state=> state.allPokemons) 
    const filterPokemons = useSelector(state=> state.filterPokemons)
    let totalPokemons
    //const [pokemonPerPage, setPokemonPerPage ]= useState(12)
    //const [currentPage, setcurrentPage]=useState(1);

    if(filterPokemons.length===0){
        totalPokemons = allPokemons.length
    }else{
        totalPokemons = filterPokemons.length
    }
    //const totalPokemons = allPokemons.length


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
        //console.log(value)
    }


    useEffect(()=>{
       // console.log(Math.ceil(totalPokemons/pokemonPerPage) )
    },[allPokemons])

    return(
        <div className={style.pagination}>
            <button className={currentPage===1 ? style.disabled : style.enabled } onClick={onClickPrevious}>Previous</button>
            <ul className={style.ul}>
                {pageNumber.map((number, index)=>{
                    return (
                         <li key={number}> 
                            <button
                            className={`${number === currentPage ? style.currentButton : style.notCurrentButton}`} 
                            key={index}
                            value={number} 
                            onClick={onClickCurrent}
                            >{number}</button>
                         </li> 
                    )
                })}
            </ul>
            <button className={currentPage >= pageNumber.length ? style.disabled : style.enabled } onClick={onClickNext}>Next</button>
        </div>
    )
}

export default Pagination