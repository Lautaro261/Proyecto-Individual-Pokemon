import { Link } from 'react-router-dom';
import style from './Landing.module.css'

const Landing = ()=>{
    return(
        <div className={style.landing} > 
          <div className={style.container}>
          <Link to='/home'>
                <button className={style.button}>Let's go!</button>
            </Link>
          </div>
            
        </div>
    )
}

export default Landing;