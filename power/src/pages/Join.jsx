import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../styles/Join.css';
import Button from '../components/Button';

function Join({token, setToken, setMyUsername}) {
    const navigate = useNavigate();

    const [logError, setLogError] = useState(false)

    const [onglet, setOnglet] = useState(1);
    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');
    const [signEmail, setSignEmail] = useState('');
    const [signPassword, setSignPassword] = useState('');
    const [signConfirmPassword, setSignConfirmPassword] = useState('');

    const tryLogin = async (e)  => {
        e.preventDefault()
        await axios.post('https://reqres.in/api/login', {email: logEmail, password: logPassword})
        .then(res => {
            setToken(res.data['message']);
            setMyUsername(logEmail);
            console.log(res.data);
            navigate('/myProjects');
            setLogError(false);
        })
        .catch(error => {
            setLogError(true);
        });
    }

    const tryRegister = async (e) => {
        e.preventDefault();
        await axios.post('https://reqres.in/api/register', {email: signEmail, password: signPassword})
        .then(res => {
            if ('message' in res.data) {
                setToken(res.data['message']);
                setMyUsername(signEmail);
                navigate('/myProjects');
                console.log(res.data)
            }
            else {
                console.log(res.data);
            }
        });
    }

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

    const handleChangeInput = (event, setState) => {
        setState(event.target.value);
    }

    const handleFocusOutInput = (event) => {
        setLogError(false);
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
                            <label id='labelEmail' className={!logError ? "label_input" : 'label_input alert'}htmlFor="username">Email</label>
                            <input id='logEmail' className={!logError ? "join_info" : 'join_info alert'} name="username" type="text" placeholder="Nom d'utilisateur" value={logEmail} onChange={event => handleChangeInput(event, setLogEmail)} maxLength={30} required/>
                        </div>
                        <div className="container-col">
                            <label id='labelPassword' className={!logError ? "label_input" : 'label_input alert'}  htmlFor="password">Mot de passe</label>
                            <input id='logPassword' className={!logError ? "join_info" : 'join_info alert'} name="password" type="password" placeholder="Mot de passe" value={logPassword} onChange={event => handleChangeInput(event, setLogPassword)} maxLength={30} required/>
                        </div>
                        <Button value="Connexion" onClick={(e)=>tryLogin(e)}></Button>
                    </form>
                :
                    <form action="" className="signin_content">
                        <h1>Inscription</h1>
                         <div className="container-col">
                            <label className="label_input" htmlFor="username">Nom d'utilisateur</label>
                            <input className="join_info" name="username" type="text" placeholder="Nom d'utilisateur" value={signEmail} onChange={event => handleChangeInput(event, setSignEmail)} maxLength={30} required/>
                        </div>
                        <div className="container-col">
                            <label className="label_input"  htmlFor="password">Mot de passe</label>
                            <input className="join_info" name="password" type="password" placeholder="Mot de passe" value={signPassword} onChange={event => handleChangeInput(event, setSignPassword)} maxLength={30} required/>
                        </div>
                        <div className="container-col">
                            <label className="label_input"  htmlFor="passwordConfirm">Confirmation Mot de passe</label>
                            <input className="join_info" name="passwordConfirm" type="password" placeholder="Mot de passe" value={signConfirmPassword} onChange={event => handleChangeInput(event, setSignConfirmPassword)} maxLength={30} required/>
                        </div>
                        <Button value="Inscription" onClick={(e)=>tryRegister}></Button>
                    </form>
                }
            </div>
        </div>  
     );
}

export default Join;