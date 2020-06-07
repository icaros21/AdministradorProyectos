import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    const [loginModel, setLoginModel] = useState({email: '', password:''});

    const onChange = (event) => {
    
        setLoginModel({
            ...loginModel, 
            [event.target.name] : event.target.value
        });
    
        console.log(loginModel)
    };    

    return (  
        <div className="container">          
            <div className="columns is-mobile is-centered">
                <div className="column is-4-desktop  is-10-mobile">
                    <div className="card">
                        <div className="card-content">
                            <form> 
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
                                    <div className="control">
                                        <button type="submit" className="button is-link">Iniciar sesión</button>
                                    </div>
                                </div>
                            </form>
                            <Link to="/nueva-cuenta" className="">
                                Nueva Cuenta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;

