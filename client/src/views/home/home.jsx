import { useEffect } from "react";
import Cards from "../../components/Cards_Container/CardsContainer";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

const Home = ()=>{
    const dispatch = useDispatch();



    useEffect(()=>{
        dispatch(getAllPokemons());  
    },[dispatch])

    return (
        <div>
            <p>ESTAMOS EN HOME </p>
            <Cards />
        </div>
    )
};

export default Home;