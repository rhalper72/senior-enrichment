const Sequelize = require('sequelize');
const db = require('../');

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
    // campus: {
    //     type: Sequelize.STRING,
    //     validate: {
    //         notEmpty: true,
    //     }
    // }
});

module.exports = Students;
