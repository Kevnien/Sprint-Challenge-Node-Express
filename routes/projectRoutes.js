const db = require('../data/helpers/projectModel.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    db.get()
        .then(projects =>{
            res.status(200).json(projects);
        })
        .catch(err => console.error(err));
});

module.exports = router;