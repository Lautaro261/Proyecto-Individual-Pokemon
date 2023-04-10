import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Cards from "../../components/Cards_Container/CardsContainer";


const Home = ()=>{
    const dispatch = useDispatch();



    useEffect(()=>{
        dispatch(getAllPokemons());  
    },[dispatch])

    return (
        <div>
            <Cards />
        </div>
    )
};

export default Home;