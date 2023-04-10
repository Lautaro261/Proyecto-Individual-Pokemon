import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons, getAllTypes  } from "../../redux/actions";
import Cards from "../../components/Cards_Container/CardsContainer";


const Home = ()=>{
    const dispatch = useDispatch();



    useEffect(()=>{
        dispatch(getAllPokemons());
        dispatch(getAllTypes());
    },[dispatch])

    return (
        <div>
            <Cards />
        </div>
    )
};

export default Home;