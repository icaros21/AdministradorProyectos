import React, {useState} from 'react';

const NuevaCuenta = () => {
    const [registerModel, setRegisterModel] = useState({nombre: '', email:'', password: '', confirmPassword: ''});

    const onChange = (event) => {
    
        setRegisterModel({
            ...registerModel, 
            [event.target.name] : event.target.value
        });
    
        console.log(registerModel)
    };    

    return (  
        <div className="container">          
            <div className="columns is-mobile is-centered">
                <div className="column is-4-desktop  is-10-mobile">
                    <div className="card">
                        <div className="card-content">
                            <form>
                                <div className="field">
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input 
                                            type="text"
                                            name="nombre"
                                            id="txtNombre"
                                            className="input"
                                            placeholder="Tu nombre"
                                            onChange={onChange}>
                                        </input>
                                    </div>
                                </div> 
                                <div className="field">
                                    <label className="label">Correo</label>
                                    <div className="control">
                                        <input 
                                            type="email"
                                            name="email"
                                            id="txtEmail"
                                            className="input"
                                            placeholder="Correo Electronico"
                                            onChange={onChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input 
                                            type="password"
                                            name="password"
                                            id="txtPassword"
                                            className="input"
                                            placeholder="Password"
                                            onChange={onChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Confirmar Password</label>
                                    <div className="control">
                                        <input 
                                            type="password"
                                            name="confirmPassword"
                                            id="txtConfirmPassword"
                                            className="input"
                                            placeholder="Confirmar Password"
                                            onChange={onChange}>
                                        </input>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button type="submit" className="button is-link">Registrarme</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;