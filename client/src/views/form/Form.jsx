import { useState } from "react";
import axios from "axios";
import validatePropertyValue from "./validatePropertyValue";
import { useSelector } from "react-redux";


const urlImage = 'https://raw.githubusercontent.com/Lautaro261/Proyecto-Individual-Pokemon/main/client/src/recursos/ditto-what.gif';
const URL = 'http://localhost:3001/pokemons'

const Form = ()=>{

    const PokemonFail = {
		name: "komari",
		image: urlImage,
		hp: "1",
		attack: "800",
		defense: "3",
		speed: "4",
		height: "9",
		weight: "15",
		types: [7,8]
	}

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
 
/* 
    const handlerInputChange =(event)=>{
        const value = event.target.value;
        const property = event.target.name;
        console.log(`ACTUALIZADO soy value ${value} y yo property ${property}`)

        if(property === 'types'){
            console.log('si es igual ')

        }

         // actualiza el estado de form
        //setForm((prevForm) => ({ ...prevForm, [property]: value }));

         // utiliza la versión actualizada de form en validation
        //validation({ ...form, [property]: value }, errors, setErrors);

        setForm({...form, [property]:value})
        setErrors({...errors, [property]: validatePropertyValue(property, value)})
        //setErrors(validation({...form, [property]: value })) // validation({...form, [property]:value}) // truquito
        console.log(errors)
    } */

    const handlerInputChange =(event)=>{
        const value = event.target.value;
        const property = event.target.name;

        console.log(value)
    
        if(property === 'types'){
            if(!form.types.includes(value)){
                if(form.types.length < 2) { // verifico que no haya mas de 2 elementos en el array
                           // si el valor no esta en el array y no se supera el limite, agregalo
                    setForm({...form, types: form.types.concat(value)});
                }
            } else {
                 // si el valor ya esta en el array, elimina el valor existente y agregalo al nuevo
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
        console.log(PokemonFail)
         const response = await axios.post(URL, PokemonFail)
        console.log(response?.data , 'SE CREO EXITOSAMENTE')  


    }


    return (
        <div>
        <form onSubmit={submitHandler}>
            <h1>crear Pokemon </h1>
            <div>
                 <img src={urlImage} alt='create'/>
            </div>
            <div>
                {form.types.length < 2 ? <span>Puedes agregar hasta dos tipos</span> :null}
                {form.types[0] ? <p>Elegiste {form.types[0]}</p> : null}
                {form.types[1] ? <p>Elegiste {form.types[1]}</p> : null}
                <select onChange={handlerInputChange} name='types'>
                    <option>tipo</option>
                    {allTypes.map((type, index)=>{
                        return(
                            <option key={index} value={type.id} >{type.name}</option>
                        )
                    })}
                </select>
             {/*    <select>
                    <option>tipo</option>
                    {allTypes.map((type, index)=>{
                        console.log(allTypes.name)
                        return(
                            <option key={index} value={type.name} name='types'>{type.name}</option>
                        )
                    })}
                </select> */}
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
