import axios from 'axios';

const onSearch = async(name)=>{
    const nameMin = name.toLowerCase()
    const response = await axios.get(`http://localhost:3001/pokemons/?name=${nameMin}`)
    //console.log (response.data)
    const pokemon = response.data 
    console.log(pokemon)
    return pokemon;
}

export default onSearch;