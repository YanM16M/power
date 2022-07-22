import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardProject from '../components/CardProject'
import '../styles/AllProjects.css';

function AllProjects() {
    const [data, setData] = useState([]);
    const [loading, setLoading]= useState(false)

    const getProjects = async () => {
        await axios.get('http://localhost:8000/projects')
        .then(res => {
             setData(res.data);
             setLoading(true);
        });
    }

    useEffect(() => {
        getProjects();
    }, [])

    return ( 
        <>
        <div className="allProjects_container container-col">
            <h1>Liste des projets</h1>
            {
                loading ?
                    <div className="allProjects_content container-row">
                        {data.map(item => {
                            <>
                            {item.description}
                            <CardProject project={item} />
                            </>
                        })} 
                    </div>
                :
                    <div className="allProjects_content">
                        <h2>Aucun projet</h2>
                    </div>  
            }
        </div>
        </>
     );
}

export default AllProjects;