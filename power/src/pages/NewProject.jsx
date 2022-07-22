import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import '../styles/NewProject.css';

function NewProject({myUsername}) {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const getCategories = async () => {
        await axios.get('http://localhost:8000/categories')
        .then(res => {
            setCategories(res.data);
        });
    }

    useEffect(() => {
        getCategories();
    }, [])
    
    const handleSearch = (search) => {
        const newArray = [];
        
        if (categories.length > 0) {
            categories.forEach(item => {
                if (item.name.includes(search)) {
                    newArray.push(item);
                }
            })
        }
        else {
            getCategories();
            return;
        } 

        setCategories(newArray);
    }

    const addProject = async (e) => {
        e.preventDefault();
        const memberCount = Math.floor(Math.random() * 5)
        await axios.post('http://localhost:8000/projects', {title: title, description: description, category: category, from: myUsername, memberCount: memberCount})
        .then(res => {
            navigate('/myProjects');
        });
    }

    const handleChangeInput = (event, setState) => {
        setState(event.target.value);
    }

    const handleClickCategory = (event, nameCategory) => {
        setCategory(nameCategory);
    }

    return (
        <div className="creation_project_container container-col">
            <h1>Création d'un nouveau projet</h1>
            <section className="category_selection container-col">
                <h2>Catégorie du projet</h2>
                <div className="container-row">
                    {categories.slice(0, 5).map((item) => (
                        <div onClick={e => handleClickCategory(e, item.name)}>
                            <Card title={item.name}></Card>
                        </div>
                    ))}
                </div>
                <SearchBar onChange={handleSearch}></SearchBar>
            </section>
            <section className="creation_description container-col">
                <h2>Description du projet</h2>
                <div className="container-col">
                    <label className="label_creation" htmlFor="projectName">Nom du projet</label>
                    <input className="input_creation" type="text" value={title} onChange={e => handleChangeInput(e, setTitle)} required/>
                </div>
                <div className="container-col">
                    <label className="label_creation"  htmlFor="projectDesc">Descriptif</label>
                    <textarea className="input_creation" name="projectDesc" value={description} onChange={e => handleChangeInput(e, setDescription)} id="" cols="30" rows="10"></textarea>
                </div>
            </section>
            <Button value="Valider la création du projet" onClick={(e) => addProject(e)}/>
        </div>
     );
}

export default NewProject;