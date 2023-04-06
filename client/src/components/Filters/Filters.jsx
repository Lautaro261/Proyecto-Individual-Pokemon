import { OrderName } from "../../redux/actions";
import { useDispatch } from "react-redux";


const Filters =()=>{

    const dispatch = useDispatch()

    const hanlderSelect = (event)=>{
        event.preventDefault()
        const value = event.target.value;
        console.log(value, 'estoy despachando desde filters')
        dispatch(OrderName(value))
        
    }
    return (
        <div>
            <button >filtro</button>
            <select onChange={(event)=>hanlderSelect(event)}>
                <option value= 'default' >ordenar</option>
              <option value='az'>az</option>
              <option value='za'>za</option>
            </select>
        </div>
    )
}

export default Filters;