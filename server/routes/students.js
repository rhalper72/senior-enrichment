const express = require('express');
const studentRouter = express.Router();
const Student = require('../../db/models').Student
const Campus = require('../../db/models').Campus

//get route to get all students. used eager loading.
studentRouter.get('/', function(req, res, next) {
    Student.findAll({include: [Campus]})
    .then(student => res.json(student))
    .catch(next)
})
//used .param route since i have multiple route below that use the same param, and setup eager loading all in one place.
studentRouter.param('studentId', (req, res, next, id) => {
    Student.findById(id, {include: [{all: true}]})
        .then(student => {
            if (!student) {
                const err = new Error('Not Found')
                err.status = 404;
                throw err;
            }
            req.student = student;
            next();
        })
        .catch(next);
})
//get route for a single student
studentRouter.get('/:studentId', function(req, res, next){
    res.json(req.student);
})
//route to create a new student
studentRouter.post('/', function(req, res, next){
    Student.create(req.body)
    //added this so that I have access to campuses when I create a student
    .then(newStudent => Student.findById(newStudent.id, {include: [{all: true}]}))
    .then(newStudent => res.status(201).json(newStudent))
    .catch(next)
})
//route to update a student
studentRouter.put('/:studentId', function(req, res, next){
    req.student.update(req.body)
    .then(student => res.status(200).json(student))
    .catch(next)
})
//route to delete a student
studentRouter.delete('/:studentId', function(req, res, next){
    req.student.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = studentRouter
