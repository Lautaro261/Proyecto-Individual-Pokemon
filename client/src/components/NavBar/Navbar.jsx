import { Link } from "react-router-dom";
import style from './Navbar.module.css';


const NavBar = ()=>{
    return (
        <div className={style.nav} >
          <div>
            <Link to='/home'>Home</Link>
          </div>
          <div>
            <Link to='/form'>Create Pokemon!</Link>
          </div>

        </div>
    )
}

export default NavBar;