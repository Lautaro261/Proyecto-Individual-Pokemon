import { Link } from 'react-router-dom';
import style from './Landing.module.css'


const Landing = ()=>{
    
    return(
        <div className={style.landing} > 
            {/* <p>ESTAMOS EN LANDING... </p> */}
            <Link to='/home'>
             <button className={style.button}>VAMOS A HOME</button>
            </Link>
            
        </div>
    )
}

export default Landing;