import React, {useReducer} from 'react';
import ProyectoContext from './proyectosContext';
import ProyectoReducer from './proyectosReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO} from '../../types/index';
import {v4 as uuidv4} from 'uuid';

const ProyectoState = (props) => {
    const listProyectos = [
        {id : 1, nombreProyecto: "abc"},
        {id : 2, nombreProyecto: "dd"},
        {id : 3, nombreProyecto: "abasfc"},
        {id : 4, nombreProyecto: "a23"}
    ];
    

    const initialState = {
        nuevoProyectoForm: false,
        editarProyectoForm: false,
        editarTareaForm: false,
        proyectos: [],
        proyecto: null
    }

    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    const mostrarFormularioProyecto = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = ()  =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: listProyectos
        })
    }

    const agregarProyecto = (proyecto) => {
        proyecto.id = uuidv4();

        dispatch({
            type: AGREGAR_PROYECTO,
            payload : proyecto
        })
    }

    const proyectoActual = (proyecto) =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload : proyecto
        })
    }

    const eliminarProyecto = (proyecto) =>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyecto
        })
    }

    return(
        <ProyectoContext.Provider
            value = {{
                proyectos: state.proyectos,
                proyecto: state.proyecto,
                nuevoProyectoForm: state.nuevoProyectoForm,
                editarProyectoForm: state.editarProyectoForm,
                editarTareaForm: state.editarTareaForm,
                obtenerProyectos,
                mostrarFormularioProyecto,
                agregarProyecto,
                proyectoActual,
                eliminarProyecto
            }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;