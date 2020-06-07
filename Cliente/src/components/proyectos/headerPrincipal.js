import React from 'react';

const HeaderPrincipal = () => {
    return (  
        <header>
            <div className="hero is-dark">
                <div className="hero-body"> 
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p>Hola Juan Pablo</p>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <a href="#!">Cerrar Sesión</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
 
export default HeaderPrincipal;