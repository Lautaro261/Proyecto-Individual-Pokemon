import style from './Card.module.css';
import { Link } from 'react-router-dom'

const Card =({id,name,image,types})=>{

    
    return (
        <div className={style.card}>

            <Link to={`/detail/${id}`}>
             <p>nombre: {name}</p>
            </Link>
            {types.map((type)=>{
                return (
                    <p>{type}</p>
                )
            })}
            <img src={image} alt='img'/>


        </div>
    )
}

export default Card;
