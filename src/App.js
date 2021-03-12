import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Inicio } from './componentes/Inicio';
import { Navbar } from './componentes/Navbar';
import { Nosotros } from './componentes/Nosotros';
import { Trabajos } from './componentes/Trabajos';
import { Registro } from './componentes/Registro';
import { Login } from './componentes/Login';
import { Recuperar } from './componentes/Recuperar';
function App() {
  return (
    
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route path = "/nosotros" component = {Nosotros} />
          <Route path = "/trabajos" component = {Trabajos} />
          <Route path = "/registro" component = {Registro} />
          <Route path = "/inicio" component = {Inicio} />
          <Route path = "/recuperar" component = {Recuperar} />
          <Route path = "/" component = {Login} />
        </Switch>
      </div>
      
    </Router>

  );
}

export default App;
