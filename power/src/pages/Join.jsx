import React, { useState } from 'react'
import '../styles/Join.css';
import Button from '../components/Button';

function Join() {
    const [onglet, setOnglet] = useState(1);

    const switchOnglet = (id) => {
        setOnglet(id);
        document.getElementById('onglet' + id).classList.remove("disabled");
        if (id == 1) {
            document.getElementById('onglet2').classList.add("disabled");
        }
        else {
            document.getElementById('onglet1').classList.add("disabled");
        }
    }

    return ( 
        <div className="join_container container-center">
            <div className="formulaire_join_container">
                <div className="onglets">
                    <span id="onglet1" className="onglet" onClick={() => switchOnglet(1)}>Connexion</span>
                    <span id="onglet2" className="onglet disabled" onClick={() => switchOnglet(2)}>Inscription</span>
                </div>
                {onglet == 1 ?
                    <form action="" className="login_content">
                        <h1>Connexion</h1>
                        <div className="container-col">
                            <label className="label_input" htmlFor="username">Nom d'utilisateur</label>
                            <input className="join_info" name="username" type="text" placeholder="Nom d'utilisateur" maxLength={30} required/>
                        </div>
                        <div className="container-col">
                            <label className="label_input"  htmlFor="password">Mot de passe</label>
                            <input className="join_info" name="password" type="password" placeholder="Mot de passe" maxLength={30} required/>
                        </div>
                        <Button value="Connexion"></Button>
                    </form>
                    :
                    <form action="" className="signin_content">
                        <h1>Inscription</h1>
                         <div className="container-col">
                            <label className="label_input" htmlFor="username">Nom d'utilisateur</label>
                            <input name="username" type="text" placeholder="Nom d'utilisateur" maxLength={30} required/>
                        </div>
                        <div className="container-col">
                            <label className="label_input"  htmlFor="password">Mot de passe</label>
                            <input name="password" type="password" placeholder="Mot de passe" maxLength={30} required/>
                        </div>
                        <div className="container-col">
                            <label className="label_input"  htmlFor="passwordConfirm">Confirmation Mot de passe</label>
                            <input name="passwordConfirm" type="password" placeholder="Mot de passe" maxLength={30} required/>
                        </div>
                        <Button value="Connexion"></Button>
                    </form>
                }
            </div>
        </div>  
     );
}

export default Join;