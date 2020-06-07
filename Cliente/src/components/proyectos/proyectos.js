import React, {useContext, Fragment} from 'react';
import SideBar from '../sidebar';
import HeaderPrincipal from './headerPrincipal';
import FormTarea from '../tareas/formTarea';
import ListadoTareas from '../tareas/listadoTareas';
import ProyectoContext from '../../context/proyectos/proyectosContext';

const Proyectos = () => {
    const context = useContext(ProyectoContext);

    const{proyecto, eliminarProyecto} = context

    const eliminarHandler = (event) =>{
        eliminarProyecto(proyecto);
    }

    return (  
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <section>
                        <HeaderPrincipal /><br></br>
                    </section>
                    <div className="columns is-desktop">
                        <div className="column is-3-desktop">   
                            <section className="hero is-light">
                                <section className="hero-body">
                                    <aside>
                                        <SideBar />
                                    </aside>
                                </section>
                            </section>
                        </div>
                        <div className="column is-9-desktop">
                            <div className="container">
                                <FormTarea />
                                {
                                    proyecto ?
                                        <Fragment>
                                            <ListadoTareas />
                                            <button
                                                type="button"
                                                className="button is-secondary"
                                                onClick={eliminarHandler}
                                            >Eliminar Proyecto</button>
                                        </Fragment>
                                    :
                                        <span></span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
   
    );
}
 
export default Proyectos;
