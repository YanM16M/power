import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardProject from '../components/CardProject';
import '../styles/MyProjects.css'
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function MyProjects({myUsername}) {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    
    const getProjects = async () => {
        await axios.get('http://localhost:8000/projectsFrom/' + myUsername)
        .then(res => {
             setProjects(res.data);
        });
    }
 
    useEffect(() => {
        getProjects();
    }, []);

    return ( 
        <div className="myProjects_container container-col">
            <h1>Mes projets</h1>
            {projects.length > 0 ?
                <div className="myProjects_content container-row">
                    {projects.map((project) => (
                        <CardProject project={project} />
                    ))}
                </div>
            :   
                <div className="container-col">
                    <h2>Vous n'avez aucun projet</h2>
                    <Button value="Creéz un nouveau projet" onClick={() => navigate('/newProject') }/>
                </div>
            }
        </div>
     );
}

export default MyProjects;