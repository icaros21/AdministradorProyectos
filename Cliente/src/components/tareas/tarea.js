import React, { Fragment } from 'react';

const Tarea = (item) => {

    const {nombre, estado} = item.tarea;
    return (  
        <Fragment>
            <div className="card">
                <div className="card-content">
                    <div className="notification is-link is-light has-text-centered">
                        <div className="level">
                            <div className="leve-left">
                                <div className="level-item">
                                    <p>{nombre}</p>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                   
                                    <p>{estado ? "Completado" : "Incompleto"}</p>
                                   
                                </div>
                                <div className="level-item">
                                    
                                    <button
                                        type="button"
                                        className="button is-primary">
                                        Editar
                                    </button>
                                    
                                </div>
                                <div className="level-item">
                                    
                                    <button
                                        type="button"
                                        className="button is-secondary">
                                        Eliminar
                                    </button>
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </Fragment>
    );
}
 
export default Tarea;