import React, { Fragment, useContext, useEffect } from 'react';
import Proyecto from './proyecto';
import ProyectoContext from '../../context/proyectos/proyectosContext';

const ListadoProyectos = () => {
    const context = useContext(ProyectoContext);

    const{obtenerProyectos, proyectos} = context;
    
    useEffect(() => {
        obtenerProyectos();
    },[]);


    return (  
        <Fragment>
                {
                    proyectos.map((proyecto) =>(
                        <Proyecto item={proyecto} key={proyecto.id} />
                    ))
                   
                }
        </Fragment>
    );
}
 
export default ListadoProyectos;