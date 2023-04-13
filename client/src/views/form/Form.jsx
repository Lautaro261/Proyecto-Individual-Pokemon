import { useState } from "react";
import axios from "axios";
import validatePropertyValue from "./validatePropertyValue";
import { useSelector } from "react-redux";
import style from './Form.module.css';


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

       // console.log(value)
    
        if(property === 'types'){                                    //'normal'
            if(!form.types.includes(value)){  // ¿No types= [] incluye(value)? false o true


                if(form.types.length < 2) { // verifico que no haya mas de 2 elementos en el array
                           //  value no esta en el array y no se supera el limite?  agregalo
                           //console.log(value, 'Me agregaron, estoy en linea 85')
                    setForm({...form, types: form.types.concat(parseInt(value))});
                }



            } else {
                         //  value ya esta en el array? elimina el value existente y agregalo al nuevo
                        // console.log(value, 'si ya existo. Linea 93')
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
        if(Object.values(errors).every(value => !value)){
            try {
        
                const response = await axios.post(URL, form)
               //console.log(response?.data , 'SE CREO EXITOSAMENTE')  
               if(response?.data){
                  // console.log(response.data, 'SE CREO EXITOSAMENTE')
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
            } catch (error) {
             alert('No se pudo crear el Pokemon')
            }

        }else{
            alert('No se puede enviar el formulario. Faltan datos')
        }
       // console.log(form)
      

        


    }


    return (
        <div className={style.formContainer}>

           {/*  <h1>create your Pokemon!</h1> */}
        
        <div className={style.form}> 
        <form onSubmit={submitHandler}>
            
            <div>
                {form.types.length < 2 ? <span>Puedes agregar hasta dos tipos</span> :null}

        
                <select onChange={handlerInputChange} name='types' defaultValue={'default'}>
                    <option value='default'>1 or 2 types</option>
                    {allTypes.map((type, index)=>{
                        return(
                            <option key={index} value={type.id} >{type.name}</option>
                        )
                    })}
                </select>
            </div>


            <div>
                <label>Name: </label>
                <input type="text" placeholder="Ej.: pikachu..." name='name' value={form.name} onChange={handlerInputChange}></input>
                {errors.name && <span>{errors.name}</span>}
            </div>
            
            <div>
                <label>HP: </label>
                <input type="text" placeholder="Ej.: 100.." name='hp' value={form.hp} onChange={handlerInputChange}></input>
                {errors.hp && <span>{errors.hp}</span>}
            </div>
            <div>
                <label>Attack: </label>
                <input type="text" placeholder="Ej.: 80..." name='attack' value={form.attack} onChange={handlerInputChange}></input>
                {errors.attack && <span>{errors.attack}</span>}
            </div>
            <div>
                <label>Defense: </label>
                <input type="text" placeholder="Ej.: 5" name='defense' value={form.defense} onChange={handlerInputChange}></input>
                {errors.defense && <span>{errors.defense}</span>}
            </div>
            <div>
                <label>Speed: </label>
                <input type="text" placeholder="Ej.: 65" name='speed' value={form.speed} onChange={handlerInputChange}></input>
                {errors.speed && <span>{errors.speed}</span>}
            </div>
            <div>
                <label>height: </label>
                <input type="text" placeholder="Ej.: 20" name='height' value={form.height} onChange={handlerInputChange}></input>
                {errors.height && <span>{errors.height}</span>}
            </div>
            <div>
                <label>weight: </label>
                <input type="text" placeholder="Ej.: 700" name='weight' value={form.weight} onChange={handlerInputChange}></input>
                {errors.weight && <span>{errors.weight}</span>}
            </div>
            





            <button type="submit">submit</button>
        </form>

        
        </div >
        <div className={style.newPokemon}>
            <h2>New Pokemon</h2>
            <div>
                 <img src={urlImage} alt='create'/>
            </div>
            <p>Name : {form.name}</p>
            <p>HP: {form.hp}</p>
            <p>Attack : {form.attack}</p>
            <p>Defense : {form.defense}</p>
            <p>Speed : {form.speed}</p>
            <p>Height : {form.height/ 10 } m</p>
            <p>weight : {form.weight / 10 } kg</p>
            {form.types[0] ? <p>{allTypes.find(type => type.id === form.types[0]).name}</p> : null}
            {form.types[1] ? <p>{allTypes.find(type => type.id === form.types[1]).name}</p> : null}
        </div>
        </div>
        
    )
}

export default Form;
