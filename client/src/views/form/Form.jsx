import { useState } from "react";
import axios from "axios";
import validatePropertyValue from "./validatePropertyValue";
import { useSelector } from "react-redux";


const urlImage = 'https://raw.githubusercontent.com/Lautaro261/Proyecto-Individual-Pokemon/main/client/src/recursos/defaultCreate.gif';
const URL = 'http://localhost:3001/pokemons'

const Form = ()=>{


    const [form, setForm] = useState({
        name:'',
        image:urlImage,
        hp:'',
        attack:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        types:[], // tiene que ser un array []
    })

     const [errors, setErrors]=useState({
        name:'',
        image:'',
        hp:'',
        attack:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        types:'',
    })

    const allTypes = useSelector(state=> state.allTypes) 
 


    const handlerInputChange =(event)=>{
        const value = event.target.value;
        const property = event.target.name;

        console.log(value)
    
        if(property === 'types'){                                    //'normal'
            if(!form.types.includes(value)){  // ¿No types= [] incluye(value)? false o true


                if(form.types.length < 2) { // verifico que no haya mas de 2 elementos en el array
                           //  value no esta en el array y no se supera el limite?  agregalo
                           console.log(value, 'Me agregaron, estoy en linea 85')
                    setForm({...form, types: form.types.concat(parseInt(value))});
                }



            } else {
                         //  value ya esta en el array? elimina el value existente y agregalo al nuevo
                         console.log(value, 'si ya existo. Linea 93')
                 const filteredTypes = form.types.filter(type => type !== value);

                setForm({...form, types: filteredTypes.concat(value)}); 
            }
        } else {
            setForm({...form, [property]:value});
        }
    
        setErrors({...errors, [property]: validatePropertyValue(property, value)});
    }

    const submitHandler=async(event)=>{
        event.preventDefault();
        console.log(form)
         const response = await axios.post(URL, form)
        //console.log(response?.data , 'SE CREO EXITOSAMENTE')  
        if(response?.data){
            console.log(response.data, 'SE CREO EXITOSAMENTE')
            setForm({
                name:'',
                image:urlImage,
                hp:'',
                attack:'',
                defense:'',
                speed:'',
                height:'',
                weight:'',
                types:[],
            })
            setErrors({
                name:'',
                image:'',
                hp:'',
                attack:'',
                defense:'',
                speed:'',
                height:'',
                weight:'',
                types:'',
            })

            alert('Tu pokemon fue creado! Felicidades!')
        }


    }


    return (
        <div>
        <form onSubmit={submitHandler}>
            <h1>create your Pokemon!</h1>
            <div>
                 <img src={urlImage} alt='create'/>
            </div>
            <div>
                {form.types.length < 2 ? <span>Puedes agregar hasta dos tipos</span> :null}
                {form.types[0] ? <p>Elegiste {allTypes.find(type => type.id === form.types[0]).name}</p> : null}
                {form.types[1] ? <p>Elegiste {allTypes.find(type => type.id === form.types[1]).name}</p> : null}

                {/* {form.types[1] ? <p>Elegiste {form.types[1]}</p> : null} {/* CAMBIAR ID POR NAME } */}
                <select onChange={handlerInputChange} name='types' defaultValue={'default'}>
                    <option value='default'>Elige 1 o 2 tipos</option>
                    {allTypes.map((type, index)=>{
                        return(
                            <option key={index} value={type.id} >{type.name}</option>
                        )
                    })}
                </select>
            </div>













            <div>
                <label>Nombre: </label>
                <input type="text" placeholder="Su nombre" name='name' value={form.name} onChange={handlerInputChange}></input>
                {errors.name && <span>{errors.name}</span>}
            </div>
            {/* <div>
                <label>Image</label>
                <input type="text" name='image' value={form.image}></input>
            </div> */}
            <div>
                <label>Vida: </label>
                <input type="text" placeholder="Su vida" name='hp' value={form.hp} onChange={handlerInputChange}></input>
                {errors.hp && <span>{errors.hp}</span>}
            </div>
            <div>
                <label>Ataque: </label>
                <input type="text" placeholder="Su ataque" name='attack' value={form.attack} onChange={handlerInputChange}></input>
                {errors.attack && <span>{errors.attack}</span>}
            </div>
            <div>
                <label>Defensa: </label>
                <input type="text" placeholder="Su defensa" name='defense' value={form.defense} onChange={handlerInputChange}></input>
                {errors.defense && <span>{errors.defense}</span>}
            </div>
            <div>
                <label>Velocidad: </label>
                <input type="text" placeholder="Su velocidad" name='speed' value={form.speed} onChange={handlerInputChange}></input>
                {errors.speed && <span>{errors.speed}</span>}
            </div>
            <div>
                <label>Altura: </label>
                <input type="text" placeholder="Su altura" name='height' value={form.height} onChange={handlerInputChange}></input>
                {errors.height && <span>{errors.height}</span>}
            </div>
            <div>
                <label>Peso: </label>
                <input type="text" placeholder="Su Peso" name='weight' value={form.weight} onChange={handlerInputChange}></input>
                {errors.weight && <span>{errors.weight}</span>}
            </div>
            





            <button type="submit">submit</button>
        </form>
        
        </div>
        
    )
}

export default Form;
