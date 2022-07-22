const express = require('express') // la récupération d'express
const app = express() // variable utilisant la librairie express
const projet = require('./projects.json')
const categories = require('./categories.json')
var cors = require('cors')
app.use(cors())

//MiddleWare
app.use(express.json())

//aficher toutes les catégories
app.get('/categories', (req, res) => {
	res.status(200).json(categories);
})


// afficher un seul projet
app.get('/projects/:id', (req,res) => {
     const id = parseInt(req.params.id)
     const leProjet = projet.find(projet => projet.id === id)
     res.status(200).json(leProjet)
 })

app.get('/projectsFrom/:from', (req,res) => {
     const from = req.params.from
     let projects = [];
     projet.forEach(item => {
          if (item.from == from) {
               projects.push(item);
          }
     })
     res.status(200).json(projects)
 })

 app.post('/projects', (req,res) => {
	projet.push(req.body) 
	res.status(200).json(projet) 
})

app.delete('/projects/:id', (req,res) => {
	const id = parseInt(req.params.id) 
	let leProjet = projet.find(projet => projet.id === id) 
	projet.splice(projet.indexOf(leProjet),1) 
	res.status(200).json(projet) 
})


app.listen(8000, () => { // ouverture du serveur sur le port 3000
     console.log("Serveur à l'écoute") // afficher un message dans la console.
})
