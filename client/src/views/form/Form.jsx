import { useState } from "react";
import axios from "axios";
import validatePropertyValue from "./validatePropertyValue";

const URL = 'http://localhost:3001/pokemons'

const Form = ()=>{

    const [form, setForm] = useState({
        name:'',
        image:'',
        hp:'',
        attack:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        type:'', // tiene que ser un array []
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
        type:'',
    })
 

    const handlerInputChange =(event)=>{
        const value = event.target.value;
        const property = event.target.name;
        console.log(`ACTUALIZADO soy value ${value} y yo property ${property}`)

         // actualiza el estado de form
        //setForm((prevForm) => ({ ...prevForm, [property]: value }));

         // utiliza la versión actualizada de form en validation
        //validation({ ...form, [property]: value }, errors, setErrors);

        setForm({...form, [property]:value})
        setErrors({...errors, [property]: validatePropertyValue(property, value)})
        //setErrors(validation({...form, [property]: value })) // validation({...form, [property]:value}) // truquito
        console.log(errors)
    }


    const submitHandler=async(event)=>{
        event.preventDefault();
        console.log(form)
        const response = await axios.post(URL, form)
        console.log(response?.data , 'SE CREO EXITOSAMENTE')  


    }




    return (
        <form onSubmit={submitHandler}>
            <h1>crear Pokemon </h1>
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
            {/* FALTA TERMINAR TYPE E IMAGENES */}
            <div>
                <select>
                    <option>tipo</option>
                    <option>a</option>
                    <option>b</option>
                    <option>c</option>
                </select>
            </div>
            <button type="submit">submit</button>
        </form>
    )
}

export default Form;

/* Nombre.
Imagen.
Vida.
Ataque.
Defensa.
Velocidad (si tiene).
Altura (si tiene).
Peso (si tiene).
Posibilidad de seleccionar/agregar varios tipos en simultáneo.
Botón para crear el nuevo pokemon. 


{
	"name": "pipi",
	"type" : "agua",
	"image" : "tukituki.com",
	"hp": 1,
	"attack": 2,
	"defense": 3,
	"speed": "4",
	"height": "9",
	"weight" : "15"
	
}

*/