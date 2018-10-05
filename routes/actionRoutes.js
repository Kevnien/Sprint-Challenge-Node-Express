const db = require('../data/helpers/actionModel.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    db.get()
        .then(actions =>{
            res.status(200).json(actions);
        })
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    db.get(id)
        .then(action =>{
            res.status(200).json(action);
        })
        .catch(err => res.status(400).json(err));
});

router.post('/', (req, res)=>{
    db.insert(req.body)
        .then(
            res.status(200).json(`Added to actionModel`)
        )
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
        .then(action =>{
            res.status(200).json(action);
        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;