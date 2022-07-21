import React, {useState} from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    const [token, setToken] = useState('');
    return ( 
        <div className="navbar_container">
            <div className="logo_container">
                <Link className="logo" to="/">Power</Link>
            </div>
            <div className="list_container">
                <ul className="list_items">
                    {
                        !token ?  
                        <ul className="list_items">
                            <li className="list_item">
                                <Link className="list_item" to="/join">S'inscrire</Link>
                            </li>
                            <li className="list_item">
                                <Link className="list_item" to="/join">Se connecter</Link>
                            </li>
                        </ul> 
                        :
                        <ul className="list_items">
                            <li className="list_item">
                                Mes projets
                            </li>
                            <li className="list_item">
                                Parcourir les projets
                            </li>
                        </ul>
                    }
                    
                </ul>
            </div>
        </div>
     );
}

export default Navbar;