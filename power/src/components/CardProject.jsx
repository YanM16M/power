import React from 'react'
import '../styles/CardProject.css';

function CardProject({project}) {
    console.log(project)
    return ( 
        <div className="card_project_container container-col">
            <span className="card_project_title">
                {project.title}
            </span>
            <span className="card_project_category">
                {project.category}
            </span>
            <p className="card_project_description">
                {project.description}
            </p>
            <span className="card_project_member">
                {project.memberCount} collaborateurs(s)
            </span>
            <span className="card_project_creator">
                Créée par {project.from}
            </span>
        </div>
     );
}

export default CardProject;