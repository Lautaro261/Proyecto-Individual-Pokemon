import { useEffect } from "react";
import { OrderName, clearAllTypes, filterID, filterTypes, getAllPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


const Filters =()=>{

    const allTypes = useSelector(state=>state.allTypes) 
    const filterPokemons= useSelector(state=> state.filterPokemons)
    const dispatch = useDispatch()

    const hanlderSelect1 = (event)=>{
        event.preventDefault()
        const value = event.target.value;
        console.log(value, 'estoy despachando desde filters')
        dispatch(OrderName(value))   
    }


    
    const handlerSelectFilters = (event)=>{
        event.preventDefault()
        const value = event.target.value;
        console.log(value, 'estoy despachando desde filters')
        dispatch(filterID(value)) 
    }

    const handlerSelectFilterTypes = (event)=>{
        const value = event.target.value
        console.log(value, 'LINEA 29')
        if( value === 'default'){
            dispatch(getAllPokemons())
        }
       // dispatch(getAllPokemons())
        dispatch(filterTypes(value))
    }

    const handlerReset = ()=>{
        console.log('me hiciste click')
        dispatch(clearAllTypes())
        dispatch(getAllPokemons())
    }


    useEffect(()=>{
        console.log('Filter se montó correctamente', allTypes)
    },[allTypes])


    return (
        <div>
            <div>
            <select onChange={(event)=>hanlderSelect1(event)}>
                <option value='default' >ordenar</option>
              <option value='az'>az</option>
              <option value='za'>za</option>
              <option value='ha'>mayor ataque</option>
              <option value='la'>menor ataque</option>
            </select>

            </div>
            <div>
                <button value='string' onClick={(event)=>{handlerSelectFilters(event)}}>Creados</button>
                <button value='number' onClick={(event)=>{handlerSelectFilters(event)}}>Autenticos</button>

            </div>
            <div>
            <select onChange={(event)=>handlerSelectFilterTypes(event)}> 
                <option value='default'>Filtros Por tipos</option>    
                {allTypes?.map((type, index)=>{
                    return (
                        <option key={index} value={type?.name}>{type?.name}</option>
                    )
                })}
                
            </select>
            </div>
            { filterPokemons.length !== 0 ?
            <div>
                <select onChange={(event)=>handlerSelectFilterTypes(event)}> 
                    <option value='default'>Filtros Por tipos</option>    
                    {allTypes?.map((type, index)=>{
                        return (
                            <option key={index} value={type?.name}>{type?.name}</option>
                        )
                    })}
                </select>
            </div> :
            null
        }

            <div>
                <button onClick={handlerReset}>reset</button>
            </div>
        </div>
        
    )
}

export default Filters;