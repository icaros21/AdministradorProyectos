import React, {useReducer} from 'react';
import tareasReducer from './tareasReducer';
import tareasContext from './tareasContext';
import { OBTENER_TAREAS, AGREGAR_TAREAS, PAGINADOR_TAREAS } from '../../types';
import {v4 as uuidv4} from 'uuid';

const TareasState = (props) => {
    const tareasProyecto = [
        {id: 1, nombre: 'nombre tarea', estado : true, proyectoId: 1},
        {id: 2, nombre: 'nombre tarea 1', estado : true, proyectoId: 1},
        {id: 3, nombre: 'nombre tarea 2', estado : true, proyectoId: 1},
        {id: 4, nombre: 'nombre tarea 3', estado : false, proyectoId: 1},
        {id: 5, nombre: 'nombre tarea', estado : true, proyectoId: 2},
        {id: 6, nombre: 'nombre tarea 1', estado : true, proyectoId: 2},
        {id: 7, nombre: 'nombre tarea 2', estado : true, proyectoId: 2},
        {id: 8, nombre: 'nombre tarea 3', estado : false, proyectoId: 3},
        {id: 9, nombre: 'nombre tarea 10', estado : true, proyectoId: 1},
        {id: 10, nombre: 'nombre tarea 11', estado : true, proyectoId: 1},
        {id: 11, nombre: 'nombre tarea 12', estado : true, proyectoId: 1},
        {id: 12, nombre: 'nombre tarea 13', estado : false, proyectoId: 1},
        {id: 13, nombre: 'nombre tarea', estado : true, proyectoId: 2},
        {id: 14, nombre: 'nombre tarea 1', estado : true, proyectoId: 2},
        {id: 15, nombre: 'nombre tarea 2', estado : true, proyectoId: 2},
        {id: 16, nombre: 'nombre tarea 13', estado : true, proyectoId: 1},
        {id: 17, nombre: 'nombre tarea 14', estado : true, proyectoId: 1},
        {id: 18, nombre: 'nombre tarea 15', estado : true, proyectoId: 1},
        {id: 19, nombre: 'nombre tarea 16', estado : false, proyectoId: 1},
        {id: 20, nombre: 'nombre tarea', estado : true, proyectoId: 2},
        {id: 21, nombre: 'nombre tarea 1', estado : true, proyectoId: 2},
        {id: 22, nombre: 'nombre tarea 2', estado : true, proyectoId: 2},
        {id: 23, nombre: 'nombre tarea', estado : true, proyectoId: 1},
        {id: 24, nombre: 'nombre tarea 1', estado : true, proyectoId: 1},
        {id: 25, nombre: 'nombre tarea 2', estado : true, proyectoId: 1},
        {id: 26, nombre: 'nombre tarea 3', estado : false, proyectoId: 1},
        {id: 27, nombre: 'nombre tarea', estado : true, proyectoId: 2},
        {id: 28, nombre: 'nombre tarea 1', estado : true, proyectoId: 2},
        {id: 29, nombre: 'nombre tarea 2', estado : true, proyectoId: 2}
        
    ];

    const page = 1, itemsPerPage = 3;

    const initialState = {
        tareas : tareasProyecto,
        tareasProyecto : [],
        itemsPerPage : itemsPerPage,
        page : page,
        totalPages : 0,
        items : []
    }

    const [state, dispatch] = useReducer(tareasReducer, initialState);

    const obtenerTareas = (id) =>{
        dispatch({
            type: OBTENER_TAREAS,
            payload: id
        })
    }

    const setPageNum = (activePage) => {
        dispatch({
            type: PAGINADOR_TAREAS,
            payload: activePage
        })
    };

    const agregarTareas = (tarea) => {
        tarea.id = uuidv4();

        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        })
    }

    return (  
        <tareasContext.Provider
            value={{
                tareas : state.tareas,
                tareasProyecto: state.tareasProyecto,
                itemsPerPage: state.itemsPerPage,
                page : state.page,
                totalPages : state.totalPages,
                items : state.items,
                obtenerTareas,
                agregarTareas,
                setPageNum
            }}>
            {props.children}
        </tareasContext.Provider>
    );
}
 
export default TareasState;
