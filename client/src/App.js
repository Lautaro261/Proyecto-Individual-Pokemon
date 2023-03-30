import { Route } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Home from "./views/home/home";
import Form from './views/form/Form';
import Detail from "./views/detail/Detail.jsx";
import './App.css';

function App() {
  return (
    <div className="App">


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
