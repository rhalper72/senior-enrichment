const express = require('express');
const campusRouter = express.Router();
const Campus = require('../../db/models').Campus
const Student = require('../../db/models').Student

campusRouter.get('/', function(req, res, next) {
    Campus.findAll({ include: [Student]})
    .then(campus => res.json(campus))
    .catch(next)
})

campusRouter.param('campusId', (req, res, next, id) => {
    Campus.findById(id, {include: [{all: true}]})
        .then(campus => {
            if (!campus) {
                const err = new Error('Not Found')
                err.status = 404;
                throw err;
            }
            req.campus = campus;
            next();
        })
        .catch(next);
})

campusRouter.get('/:campusId', function(req, res, next){
    res.json(req.campus);
})

campusRouter.post('/', function(req, res, next){
    Campus.create(req.body)
    .then(newCampus => res.status(201).json(newCampus))
    .catch(next)
})

campusRouter.put('/:campusId', function(req, res, next){
    req.campus.update(req.body)
    .then(campus => res.status(200).json(campus))
    .catch(next)
})

campusRouter.delete('/:campusId', function(req, res, next){
    req.campus.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})
module.exports = campusRouter
