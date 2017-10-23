const Sequelize = require('sequelize');
const db = require('../');

//Defining my campus model, just giving it name and an image.
const Campuses = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: true,
        }
    },
    image: {
        type: Sequelize.TEXT,
        validate: {
            isUrl: true,
        }
    },
});

module.exports = Campuses;
