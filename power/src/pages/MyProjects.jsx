import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardProject from '../components/CardProject';
import '../styles/MyProjects.css'

function MyProjects({myUsername}) {
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
            <div className="container-row">
                {projects.map((project) => (
                    <CardProject project={project} />
                ))}
            </div>
        </div>
     );
}

export default MyProjects;