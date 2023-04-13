import { Link } from "react-router-dom";
import style from './Navbar.module.css';


const NavBar = ()=>{
  
    return (
        <div className={style.nav} >
          <div>
            <Link to='/home'>Home</Link>
          </div>
          <div>
          <Link to='/form'>
              c<span className={style.highlight}>r</span>eate Pokemon!
            </Link>
          </div>
          <div>
            <Link to='/'>Log out</Link>
          </div>

        </div>
    )
}

export default NavBar;