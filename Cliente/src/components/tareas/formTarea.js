import React, { Fragment, useState, useContext } from 'react';  
import TareasContext from '../../context/tareas/tareasContext';
import {useForm} from 'react-hook-form';
import ProyectoContext from '../../context/proyectos/proyectosContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const FormTarea = () => {

    const context = useContext(TareasContext);
    const contextProyecto = useContext(ProyectoContext);

    const { register, handleSubmit, errors } = useForm();

    const {agregarTareas, obtenerTareas, setPageNum, page} = context;
    const {proyecto} = contextProyecto;

    const [formTareaModel, setFormTarea] = useState({
        nombre: '' 
     });

    const onChange = (event) =>{
        setFormTarea({
            ...formTareaModel,
            [event.target.name]: event.target.value
        });
    };

    const onAgregarTarea = (event)=>{
        formTareaModel.proyectoId = proyecto.id;
        formTareaModel.estado = false;

        agregarTareas(formTareaModel);

        obtenerTareas(proyecto.id);

        setPageNum(page);

        setFormTarea({
            nombre:''
        })
    }

    const switchErrors = (param) => {
        if(param !== undefined){
            switch(param.type){
                case 'required':
                    return <p className="help is-danger">This username is required</p>
                case 'maxLength':
                    return <p className="help is-danger">This username is more than 10</p>
            }
        }
    }  

    return ( 
        <Fragment>
            <h1>Nueva Tarea</h1>

            <section>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <form onSubmit={handleSubmit(onAgregarTarea)}>
                            <div className="field">
                                <div className="control">
                                    <input 
                                        type="text"
                                        className="input is-hovered"
                                        name="nombre"
                                        placeholder="Nombre de la tarea"
                                        value={formTareaModel.nombre}
                                        ref={register({required:true})}
                                        onChange={onChange}
                                    ></input>
                                </div>
                                {switchErrors(errors.nombre)}
                            </div>
                            <div className="field">
                                <div className="control">
                                    <input 
                                        type="submit"
                                        className="button is-link is-fullwidth"
                                        disabled= {proyecto === null ? true: false}
                                        value="Agregar Tarea">
                                    </input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default FormTarea;