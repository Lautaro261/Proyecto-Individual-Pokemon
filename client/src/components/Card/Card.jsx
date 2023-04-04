import style from './Card.module.css';
import { Link } from 'react-router-dom'

const Card =({id,name,image,type})=>{

    return (
        <div className={style.card}>

            <Link to={`/detail/${id}`}>
             <p>nombre: {name}</p>
            </Link>
            <p>tipo: {type}</p>
            <img src={image} alt='img'/>


        </div>
    )
}

export default Card;
