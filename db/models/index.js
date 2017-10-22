'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere
const Campus = require('./campuses');
const Student = require('./students');

// This is also probably a good place for you to set up your associations


//was proud of myself for taking some time and figuring out how to require that a student has a campus, to hit the 'student must be assigned a campus' requirement
//... and then got home that night and saw that at some point during the day Kate slacked out how to do this to the whole class :-P
//these associations put a foreign key on the Student database, and set up a one to many relationship.  Doing both associations allows me to eager load the tables in both directions.
Campus.hasMany(Student, {foreignKey: { allowNull: false }, onDelete: 'CASCADE'});
Student.belongsTo(Campus, {foreignKey: { allowNull: false }, onDelete: 'CASCADE'});

module.exports = {
	Campus: Campus,
	Student: Student,
}
