import React, { Fragment, useState, useContext} from 'react';
import ProyectoContext from '../../context/proyectos/proyectosContext';
import {useForm} from 'react-hook-form';

const NuevoProyecto = () => {

    const [nuevoProyectoModel, setNuevoProyectoModel] =  useState({id: '', nombreProyecto:''});
    const context = useContext(ProyectoContext);

    const{nuevoProyectoForm, mostrarFormularioProyecto, agregarProyecto} = context;

    const { register, handleSubmit, errors } = useForm();

    const onChange = (event) =>{
        setNuevoProyectoModel({
            ...nuevoProyectoModel,
            [event.target.name]: event.target.value
        })
    }

    const onAgregar = (data) => {

        agregarProyecto(nuevoProyectoModel);
    }

    const onClickNuevo = (event) => {
        event.preventDefault();
        
        mostrarFormularioProyecto();
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
            {nuevoProyectoForm ?         
                <form onSubmit={handleSubmit(onAgregar)}>
                    <div className="field">
                        <div className="control">
                            <input
                                type="text"
                                name="nombreProyecto"
                                className="input"
                                ref={register({required: true, maxLength:20})}
                                onChange={onChange}
                                >
                            </input>
                        </div>
                        
                        {switchErrors(errors.nombreProyecto)}
                        
                    </div>
                    <div className="field">
                        <div className="control">
                            <input 
                                type="submit"
                                className="button is-link"
                                value="Guardar"
                            >
                            </input>
                        </div>
                    </div>
                </form>
                :
                <div className="field">
                    <button 
                        className="button is-link"
                        type="button"
                        onClick={onClickNuevo}
                    >
                        Nuevo Proyecto
                    </button>
                </div>
            }
        </Fragment>
    );
}
 
export default NuevoProyecto;