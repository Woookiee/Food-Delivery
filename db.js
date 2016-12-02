var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/data/meals-db.sqlite'
});

var db = {};

db.meal = sequelize.import(__dirname + '/models/meals.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

