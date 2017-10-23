const express = require('express');
const campusRouter = express.Router();
const Campus = require('../../db/models').Campus
const Student = require('../../db/models').Student

//basic get route for campuses, used eager loading to include Student table.
campusRouter.get('/', function(req, res, next) {
    Campus.findAll({ include: [Student]})
    .then(campus => res.json(campus))
    .catch(next)
})

//used .param route since i have multiple route below that use the same param, and setup eager loading all in one place.
//in this case I used the all: true for the eager loading, to get myself in the habit of remembering i can do this.  But in this case it is the same as just doing Student like I did above.
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

//Get route for single campus.
campusRouter.get('/:campusId', function(req, res, next){
    res.json(req.campus);
})
//route to create a new campus.
campusRouter.post('/', function(req, res, next){
    Campus.create(req.body)
    .then(newCampus => res.status(201).json(newCampus))
    .catch(next)
})
//route to update a campus.
campusRouter.put('/:campusId', function(req, res, next){
    req.campus.update(req.body)
    .then(campus => res.status(200).json(campus))
    .catch(next)
})
//route to delete a campus.
campusRouter.delete('/:campusId', function(req, res, next){
    req.campus.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})
module.exports = campusRouter
