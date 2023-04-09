import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";
import Cards from "../../components/Cards_Container/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";

const Home = ()=>{
    const dispatch = useDispatch();



    useEffect(()=>{
        dispatch(getAllPokemons());  
    },[dispatch])

    return (
        <div>
            <Cards />
            <Pagination/>
        </div>
    )
};

export default Home;