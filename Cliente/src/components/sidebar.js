import React, { Fragment } from 'react';
import NuevoProyecto from './proyectos/nuevoProyecto';
import ListadoProyectos from './proyectos/listadoProyectos';

const SideBar = () => {
    return (  
        <Fragment>
            <h1 className="title">Mern Task</h1>
            <section>
                <NuevoProyecto />
            </section>
            <br></br>
            <ListadoProyectos />
        </Fragment>
    );
}
 
export default SideBar;