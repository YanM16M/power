import React, {useState} from 'react';
import '../styles/Navbar.css';
import {Link, useNavigate} from 'react-router-dom';

function Navbar({token, setToken}) {
    const navigate = useNavigate();

    const logOut = () => {
        setToken('');
        navigate('/');
    } 

    return ( 
        <div className="navbar_container">
            <div className="logo_container">
                <Link className="logo" to="/">Power</Link>
            </div>
            <div className="list_container">
                <ul className="list_items">
                    {
                        token == "" ?  
                        <ul className="list_items">
                            <li className="list_item">
                                <Link className="list_item" to="/join">Log</Link>
                            </li>
                            <li className="list_item">
                                <Link className="list_item" to="/join">A propos</Link>
                            </li>
                        </ul> 
                        :
                        <ul className="list_items">
                            <li className="list_item">
                                <Link className="list_item" to="/myProjects">Mes projets</Link>
                            </li>
                            <li className="list_item">
                                <Link className="list_item" to="/allProjects">Parcourir les projets</Link>
                            </li>
                            <li className="list_item">
                                <Link className="list_item" to="/newProject">Créer un projet</Link>
                            </li>
                            <li className="list_item" onClick={logOut}>
                                Déconnexion
                            </li>
                        </ul>
                    }
                    
                </ul>
            </div>
        </div>
     );
}

export default Navbar;