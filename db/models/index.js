'use strict';

// Require all the models
const Campus = require('./campuses');
const Student = require('./students');

// This is also probably a good place for you to set up your associations


//Model Associations
//these associations put a foreign key on the Student database, and set up a one to many relationship.  Doing both associations allows me to eager load the tables in both directions.

//I noticed the 'student must be assigned a campus' requirement and I took some time to figure out how to do that, was a good aha moment.
//... and then got home that night and saw that at some point during the day Kate had slacked out how to do that to the whole class :-P

Campus.hasMany(Student, {foreignKey: { allowNull: false }, onDelete: 'CASCADE'});
Student.belongsTo(Campus, {foreignKey: { allowNull: false }, onDelete: 'CASCADE'});

module.exports = {
	Campus: Campus,
	Student: Student,
}
