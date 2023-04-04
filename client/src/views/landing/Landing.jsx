import { Link } from 'react-router-dom';

const Landing = ()=>{
    return(
        <div>
            <p>ESTAMOS EN LANDING... </p>
            <Link to='/home'>
             <button>VAMOS A HOME</button>
            </Link>
            
        </div>
    )
}

export default Landing;