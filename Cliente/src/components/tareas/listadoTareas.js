import React, { Fragment, useContext, useEffect, useState } from 'react';
import {Pagination} from 'semantic-ui-react';
import Tarea from './tarea';
import ProyectoContext from '../../context/proyectos/proyectosContext';
import TareasContext from '../../context/tareas/tareasContext';
import "semantic-ui-css/semantic.min.css";

const ListadoTareas = () => {
    const contextProyecto = useContext(ProyectoContext);
    const contextTarea = useContext(TareasContext);

    const {page, totalPages, items, setPageNum} = contextTarea;
    const {proyecto} = contextProyecto;

    const setPageConfig = (event, { activePage })=> {
        setPageNum(activePage);
    };

    const evalTareasLength = () =>{
        return (
            items.length > 0 ? 
                items.map((item) => (
                    <Tarea tarea={item} key={item.id}/>
                ))
            :
            <div className="column">
                <div className="card">
                    <div className="card-cotent">
                        No hay resultados
                    </div>
                </div>
            </div>
        )
    }

    return (  
        <Fragment>
                <br></br>
                <h1 className="title">{proyecto ? proyecto.nombreProyecto: null}</h1>

                {
                    proyecto ?
                        <Fragment>
                            {evalTareasLength()}

                            <Pagination
                                activePage={page}
                                totalPages={totalPages}
                                siblingRange={1}
                                onPageChange={setPageConfig}
                            />
                        </Fragment>
                    :
                        <span></span>
                }
            
        </Fragment>
    );
}
 
export default ListadoTareas;