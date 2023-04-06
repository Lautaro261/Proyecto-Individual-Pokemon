import { useState } from "react";
import validation from "./validation";

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
        type:'',
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

         // actualiza el estado de form
        //setForm((prevForm) => ({ ...prevForm, [property]: value }));

         // utiliza la versión actualizada de form en validation
        //validation({ ...form, [property]: value }, errors, setErrors);

        setForm({...form, [property]:value})

        setErrors(validation({...form, [property]: value })) // validation({...form, [property]:value}) // truquito
        console.log(errors)
    }


    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(form)

    }




    return (
        <form onSubmit={submitHandler}>
            <h1>crear Pokemon </h1>
            <div>
                <label>Nombre: </label>
                <input type="text" name='name' value={form.name} onChange={handlerInputChange}></input>
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Image</label>
                <input type="text" name='image' value={form.image}></input>
            </div>
            <div>
                <label>Vida: </label>
                <input type="text" name='hp' value={form.hp} onChange={handlerInputChange}></input>
                {errors.hp && <span>{errors.hp}</span>}
            </div>
            <div>
                <label>Ataque: </label>
                <input type="text" name='attack' value={form.attack} onChange={handlerInputChange}></input>
            </div>
            <div>
                <label>Defensa: </label>
                <input type="text" name='defense' value={form.defense} onChange={handlerInputChange}></input>
            </div>
            <div>
                <label>Velocidad: </label>
                <input type="text" name='speed' value={form.speed} onChange={handlerInputChange}></input>
            </div>
            <div>
                <label>Altura: </label>
                <input type="text" name='height' value={form.height} onChange={handlerInputChange}></input>
            </div>
            <div>
                <label>Peso: </label>
                <input type="text" name='weight' value={form.weight} onChange={handlerInputChange}></input>
            </div>
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