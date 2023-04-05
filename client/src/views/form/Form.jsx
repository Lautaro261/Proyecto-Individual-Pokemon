import { useState } from "react";

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

    const [error, setError]=useState({
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
        setForm({...form, [property]:value})
    }









    return (
        <form>
            <h1>crear Pokemon </h1>
            <div>
                <label>Nombre: </label>
                <input type="text" name='name' value={form.name} onChange={handlerInputChange}></input>
            </div>
            <div>
                <label>Image</label>
                <input type="text" name='image' value={form.image}></input>
            </div>
            <div>
                <label>Vida: </label>
                <input type="text" name='hp' value={form.hp} onChange={handlerInputChange}></input>
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
Botón para crear el nuevo pokemon. */