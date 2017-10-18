const Sequelize = require('sequelize');
const db = require('../');

const Campuses = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: true,
        }
    },
    image: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true,
        }
    },
});

module.exports = Campuses;
