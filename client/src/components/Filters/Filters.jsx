import { useEffect } from "react";
import { OrderName, clearAllTypes, filterID, filterTypes, getAllPokemons } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Filters.module.css";


const Filters =()=>{

    const allTypes = useSelector(state=>state.allTypes) 
   // const filterPokemons= useSelector(state=> state.filterPokemons)
    const dispatch = useDispatch()

    const hanlderSelect1 = (event)=>{
        event.preventDefault()
        const value = event.target.value;
      //  console.log(value, 'estoy despachando desde filters')
        dispatch(OrderName(value))   
    }


    
    const handlerSelectFilters = (event)=>{
        event.preventDefault()
        const value = event.target.value;
       // console.log(value, 'estoy despachando desde filters')
        dispatch(filterID(value)) 
    }

    const handlerSelectFilterTypes = (event)=>{
        const value = event.target.value
        if( value === 'default'){
            dispatch(getAllPokemons())
        }
        dispatch(filterTypes(value))
    }

    const handlerReset = ()=>{
        dispatch(clearAllTypes())
        dispatch(getAllPokemons())
    }


    useEffect(()=>{
        //console.log('Filter se montó correctamente', allTypes)
    },[allTypes])


    return (
        <div className={style.filters}>

            <div className={style.orderProp}>
            <select onChange={(event)=>hanlderSelect1(event)} defaultValue={'default'}>
              <option value='default' >Order</option>
              <option value='az'>A-Z</option>
              <option value='za'>Z-A</option>
              <option value='ha'>highest attack</option>
              <option value='la'>lowest attack</option>
              <option value='hhp'>highest hp</option>
            </select>

            </div>



            <div className={style.orderid}>
                <button className={style.button1} value='string' onClick={(event)=>{handlerSelectFilters(event)}}>Created</button>
                <button className={style.button2} value='number' onClick={(event)=>{handlerSelectFilters(event)}}>Authentic</button>

            </div>



            <div className={style.filterTypes}>
            <select  onChange={(event)=>handlerSelectFilterTypes(event)}> 
                <option value='default'>Filters by types</option>    
                {allTypes?.map((type, index)=>{
                    return (
                        <option key={index} value={type?.name}>{type?.name}</option>
                    )
                })}
                
            </select>
                
            </div>
        
            <div className={style.reset}>
                <button onClick={handlerReset}>Reset</button>
            </div>
        </div>
        
    )
}

export default Filters;