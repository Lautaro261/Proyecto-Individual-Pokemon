import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Navbar.module.css';

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
            

            
        </div>
    )
}

export default NavBar;