import logo from './logo.svg';
import './App.css';
import Bygoogle from './components/Bygoogle';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { Route, Router, Switch } from 'react-router-dom';
import { Inicio } from './components/Inicio';
import { Login } from './components/Login';
import { Registro } from './components/Registro';
import { Navbar } from './components/Navbar';
import { Recuperar } from './components/Recuperar';

function App() {
  return (
    <Router>

      <Navbar/>
    
      <div className = 'container p-2'>

        <Switch>
          <Route path = '/Registro' component = {Registro} />
          <Route path = "/Inicio" component = {Inicio} />  
          <Route path = "/Recuperar" component = {Recuperar} />  
          <Route path = '/' component = {Login} />

          
        </Switch>    

      </div>
      <Bygoogle />
    </Router>
  );
}

export default App;
