import { useState } from "react";
//import onSearch from "../../utils/search/onSearch";
import { getPokemonByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";

const SearchBar =()=>{
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange =(event)=>{
        const value = event.target.value;
        setName(value);
    }

    return (
        <div className={style.searchBarContainer}>
            <div className={style.searchBar}>
            <input type='search' onChange={handleChange} value={name} placeholder="Pokemon name or id ..."></input>
            <button onClick={()=>{
                dispatch(getPokemonByName(name))
                setName('')
                }}>Search</button>

            </div>
        </div>
    )
}

export default SearchBar;