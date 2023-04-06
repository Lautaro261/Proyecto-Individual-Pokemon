import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Navbar.module.css';
import Filters from "../Filters/Filters";

const NavBar = ()=>{
    return (
        <div className={style.nav} > 
            <ul>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/form'>Form</Link>
                </li>
            </ul>
            <SearchBar/>
            <Filters/>
            

            
        </div>
    )
}

export default NavBar;