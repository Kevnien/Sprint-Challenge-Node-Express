const db = require('../data/helpers/projectModel.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    db.get()
        .then(projects =>{
            res.status(200).json(projects);
        })
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    db.get(id)
        .then(project =>{
            res.status(200).json(project);
        })
        .catch(err => res.status(400).json(err));
});

router.get('/get-project-actions/:id', (req, res)=>{
    db.getProjectActions(req.params.id)
        .then(projects =>{
            res.status(200).json(projects);
        })
        .catch(err => res.status(400).json(err));
})

router.post('/', (req, res)=>{
    db.insert(req.body)
        .then(project =>{
            res.status(200).json(project);
        })
        .catch(err => res.status(400).json('ERROR' + project));
});

router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const project = req.body;
    db.update(id, project)
        .then( 
            res.status(200).json(`Updated project with ID:${id}.`)
        )
        .catch( err => res.status(400).json(err));
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    db.remove(id)
        .then(
            res.status(200).json(`Deleted project with ID:${id}.`)
        )
        .catch(err => res.status(400).json(err));
});

module.exports = router;