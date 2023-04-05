import { useState } from "react";
//import onSearch from "../../utils/search/onSearch";
import { getPokemonByName } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SearchBar =()=>{
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange =(event)=>{
        const value = event.target.value;
        setName(value);
    }

    return (
        <div>
            <input type='search' onChange={handleChange} value={name} placeholder="Pokemon"></input>
            <button onClick={()=>{
                dispatch(getPokemonByName(name))
                setName('')
                }}>Search</button>
        </div>
    )
}

export default SearchBar;