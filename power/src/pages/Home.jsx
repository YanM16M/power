import React from 'react';
import Button from '../components/Button';
import '../styles/Home.css';
import {useNavigate} from 'react-router-dom';
import CardProject from '../components/CardProject';

function Home() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/join');
    }

    return ( 
        <div className="home_container container-center">
            <section className="welcome container-col">
                <h1 class="title">Créez ou rejoignez un projet gratuitement !</h1>
                <span className="subtitle">Mettez en avant vos compétences et lancez-vous !</span>
                <Button 
                    value="Rejoignez Power !" 
                    size="medium" 
                    style="fill"
                    onClick={handleClick}
                />
            </section>
            
            <section className="preview_project">
                
            </section>
        </div>
     );
}

export default Home;