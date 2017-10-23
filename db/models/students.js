const Sequelize = require('sequelize');
const db = require('../');

//Defining the students model, giving a student a first name, last name, and email address.
//not requiring a last name in case there are any Brazilian soccer players at the school, with their one names :-)
const Students = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        }
    },
    lastName: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
});

module.exports = Students;
