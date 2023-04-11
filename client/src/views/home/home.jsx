import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons, getAllTypes  } from "../../redux/actions";
import Cards from "../../components/Cards_Container/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import style from './home.module.css';


const Home = ()=>{
    const dispatch = useDispatch();



    useEffect(()=>{
        dispatch(getAllPokemons());
        dispatch(getAllTypes());
    },[dispatch])

    return (
        <div className={style.home}>
            <SearchBar/>
            <Filters/>
            <Cards />
        </div>
    )
};

export default Home;