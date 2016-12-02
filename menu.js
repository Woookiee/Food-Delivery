var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/data/menu.sqlite',
	'define': {
    freezeTableName: true,
    timestamps: false
  },
  'replication': {
    read: { host: 'localhost', username: 'root', password: null },
    write:{ host: 'localhost', username: 'root', password: 241295 }
  },
});



var	menu = sequelize.define('menu', {
		restaraunt: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [2, 50]
			}
		},
		meal: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [4, 25]
			}
		},
		description: {
			type: Sequelize.STRING,
			allowNull: true,
			defaultValue: " Mmmmm....very tasty",
			validate: {
				len: [10, 250]
			}
		},
		amount: {
			type: Sequelize.INTEGER,
			allowNull: true,
			defaultValue: 1,
			validate: {
				isInt: true
			}
		},
		price: {
			type: Sequelize.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
		}
	},
	{
		timestamps: false,      //don't add the timestamp attributes (updatedAt, createdAt)
		freezeTableName: true
	}
	);

/*var mn = [
{
  "restaraunt": "Burger King",
  "meal": "Whopper",
  "description": "1/4-pound of flame-broiled beef, ripe tomatoes, crisp lettuce, creamy mayo, ketchup, crunchy pickles, and onions on a toasted sesame seed bun.",
  "amount": 1,
  "price": 900
},
{
  "restaraunt": "Burger King",
  "meal": "Cheese Whopper",
  "description": "American cheese, bacon, ripe tomatoes, crisp lettuce, creamy mayo, ketchup, crunchy pickles, and onions on a toasted sesame seed bun.",
  "amount": 1,
  "price": 900
},
{
  "restaraunt": "Burger King",
  "meal": "Hot Dog",
  "description": "The Classic Grilled Dog is a flame-grilled hot dog made with 100% beef topped with ketchup, mustard, chopped onions, and relish and served on a fluffy baked bun.",
  "amount": 1,
  "price": 400
},
{
  "restaraunt": "Burger King",
  "meal": "Fries",
  "description": "Large order of golden brown, piping hot, crispy and tasty French fries",
  "amount": 1,
  "price": 250
},
{
  "restaraunt": "Burger King",
  "meal": "Coke",
  "description": "20oz Bottled Coke",
  "amount": 1,
  "price": 120
},
{
  "restaraunt": "Burger King",
  "meal": "Sprite",
  "description": "20oz Bottled Sprite",
  "amount": 1,
  "price": 120
},
{
  "restaraunt": "Burger King",
  "meal": "Fanta",
  "description": "20oz Bottled Fanta",
  "amount": 1,
  "price": 120
}
];*/

sequelize.sync().then(function() {
	//for(var i=0; i<mn.length; i++)
  //menu.create(mn[i])
});
module.exports = menu;