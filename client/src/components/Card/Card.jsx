import style from './Card.module.css';
import { Link } from 'react-router-dom'

const Card =({id,name,image,types})=>{

    
    return (
        <div className={style.card}>

            <Link to={`/detail/${id}`}>
             <h2>{name}</h2>
            </Link>
            
            <img src={image} alt='img'/>

            {types.map((type, index)=>{
                return (
                    <h4 key={index}>Type: {type}</h4>
                )
            })}


        </div>
    )
}

export default Card;
