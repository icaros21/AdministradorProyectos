import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectosContext';
import TareasContext from '../../context/tareas/tareasContext';


const Proyecto = ({item}) => {
    const context = useContext(ProyectoContext);
    const contextTarea = useContext(TareasContext);

    const {proyectoActual} = context;
    const {obtenerTareas} = contextTarea

    const onClickProyecto = (evento) => {
        proyectoActual(item);
        obtenerTareas(item.id);
    }

    return (  

            <nav className="level">
                <div className="level-item has-text-centered">

                    <button
                        type="button"
                        className="button is-primary is-fullwidth"
                        name="btnProyecto"
                        onClick={onClickProyecto}>
                        {item.nombreProyecto}
                    </button>
                   
                </div>
            </nav>

    );
}
 
export default Proyecto;