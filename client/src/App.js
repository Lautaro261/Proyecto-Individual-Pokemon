import { Route, useLocation } from 'react-router-dom';
import { Landing, Home, Form, Detail } from './views/index';
import NavBar from './components/NavBar/Navbar';
import './App.css';

function App() {

  const location = useLocation()

  console.log(location);

  return (
    <div className="App">

      {location.pathname !== '/' && <NavBar/> }

      <Route exact path='/'>
        <Landing/>
      </Route>


      <Route path='/home'> 
        <Home/>
      </Route>

      <Route path='/form'>
        <Form/>
      </Route>
      
      <Route path='/detail'>
        <Detail/>
      </Route>
      
    </div>
  );
}

export default App;
