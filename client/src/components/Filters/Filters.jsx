import { OrderName, OrderId } from "../../redux/actions";
import { useDispatch } from "react-redux";


const Filters =()=>{

    const dispatch = useDispatch()

    const hanlderSelect1 = (event)=>{
        event.preventDefault()
        const value = event.target.value;
        console.log(value, 'estoy despachando desde filters')
        dispatch(OrderName(value))   
    }


    
    const handlerSelect2 = (event)=>{
        event.preventDefault()
        const value = event.target.value;
        console.log(value, 'estoy despachando desde filters')
        dispatch(OrderId(value)) 
    }


    return (
        <div>
            <div>
            <select onChange={(event)=>hanlderSelect1(event)}>
                <option value= 'default' >ordenar</option>
              <option value='az'>az</option>
              <option value='za'>za</option>
              <option value='ha'>mayor ataque</option>
              <option value='la'>menor ataque</option>
            </select>

            </div>
            <div>
            <select onChange={(event)=>handlerSelect2(event)}>
                <option value='default'>Filtros</option>
                <option value='id'>Por DB-API</option>
                <option value='type'>Por type</option>
            </select>

            </div>
        </div>
        
    )
}

export default Filters;