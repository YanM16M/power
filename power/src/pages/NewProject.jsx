import React, {useState} from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import '../styles/NewProject.css';

function NewProject() {
    const [categories, setCategories] = useState([
        'Développement logiciel',
        'Développement web',
        'Sport',
        'Musique',
    ]);

    
    const handleSearch = (search) => {
        const newArray = [];
        categories.forEach(item => {
            if (item.includes(search)) {
                newArray.push(item);
            }
        })
        setCategories(newArray);
    }


    return (
        <div className="creation_project_container container-col">
            <h1>Création d'un nouveau projet</h1>
            <section className="category_selection container-col">
                <h2>Catégorie du projet</h2>
                <div className="container-row">
                    {categories.slice(0, 5).map(item => (
                        <Card title={item}></Card>
                    ))}
                </div>
                <SearchBar onEnter={handleSearch}></SearchBar>
            </section>
            <section className="creation_description container-col">
                <h2>Description du projet</h2>
                <div className="container-col">
                    <label className="label_creation" htmlFor="projectName">Nom du projet</label>
                    <input className="input_creation" type="text" required/>
                </div>
                <div className="container-col">
                    <label className="label_creation"  htmlFor="projectDesc">Descriptif</label>
                    <textarea className="input_creation" name="projectDesc" id="" cols="30" rows="10"></textarea>
                </div>
            </section>
            <Button value="Valider la création du projet"/>
        </div>
     );
}

export default NewProject;