import { Link } from "react-router-dom";

const NavBar = ()=>{
    return (
        <div>
            <ul>
                <li>
                  <Link to='/home'>Home</Link>
                </li>
                <li>
                  <Link to='/form'>Form</Link>
                </li>
            </ul>
            

            
        </div>
    )
}

export default NavBar;