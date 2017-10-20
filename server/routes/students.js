const express = require('express');
const studentRouter = express.Router();
const Student = require('../../db/models').Student
const Campus = require('../../db/models').Campus

studentRouter.get('/', function(req, res, next) {
    Student.findAll({include: [Campus]})
    .then(student => res.json(student))
    .catch(next)
})

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

// studentRouter.get('/:studentId', function(req, res, next){
//     res.json(req.student);
// })

studentRouter.post('/', function(req, res, next){
    Student.create(req.body)
    .then(newStudent => res.status(201).json(newStudent))
    .catch(next)
})

studentRouter.put('/:studentId', function(req, res, next){
    req.student.update(req.body)
    .then(student => res.status(200).json(student))
    .catch(next)
})

studentRouter.delete('/:studentId', function(req, res, next){
    req.student.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = studentRouter
