import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bulma/css/bulma.css';
import Login from './components/auth/login';
import NuevaCuenta from './components/auth/nuevaCuenta';
import Proyectos from './components/proyectos/proyectos';
import ProyectosState from './context/proyectos/proyectosState';
import TareasState from './context/tareas/tareasSate';

function App() {
  return (
    <ProyectosState>
      <TareasState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/nueva-cuenta" component={NuevaCuenta}></Route>
            <Route exact path="/proyectos" component={Proyectos}></Route>
          </Switch>
        </Router>
      </TareasState>  
    </ProyectosState>
  );
}

export default App;
