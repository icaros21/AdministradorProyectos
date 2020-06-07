import {OBTENER_TAREAS, AGREGAR_TAREAS, PAGINADOR_TAREAS} from '../../types/index';

export default function(state,action) {
    switch (action.type){
        case OBTENER_TAREAS:
            const tareas = state.tareas.filter(tarea => tarea.proyectoId === action.payload);

            return { 
                ...state,
                tareasProyecto: tareas,
                page : 1,
                totalPages : Math.round(tareas.length / state.itemsPerPage),
                items : tareas.slice(
                    (1 - 1) * state.itemsPerPage,
                    (1 - 1) * state.itemsPerPage + state.itemsPerPage
                )
            }
        case AGREGAR_TAREAS:
            return { 
                ...state,
                tareas: [...state.tareas, action.payload]
            }
        case PAGINADOR_TAREAS:
            return { 
                ...state,
                page : action.payload,
                totalPages : Math.round(state.tareasProyecto.length / state.itemsPerPage),
                items : state.tareasProyecto.slice(
                    (action.payload - 1) * state.itemsPerPage,
                    (action.payload - 1) * state.itemsPerPage + state.itemsPerPage
                )
            }
    }
}
