import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO} from '../../types/index';

const ProyectoReducer = (state, action) => {
    switch (action.type) {
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.concat(action.payload),
                nuevoProyectoForm : false
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos:  action.payload
            }
        case FORMULARIO_PROYECTO:
            return  {
                ...state,
                nuevoProyectoForm: true
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto : state.proyectos.filter(proyecto => proyecto.id === action.payload.id)[0]
            }
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos : state.proyectos.filter(proyecto => proyecto.id !== action.payload.id),
                proyecto: null
            }
        default:
            return state
    }
}

export default ProyectoReducer;