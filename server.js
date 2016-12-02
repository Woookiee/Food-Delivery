var express = require('express');
	var bodyParser = require('body-parser');
		var _ = require('underscore');
			var db = require('./db.js');
				var menu = require('./menu.js');

var app = express();
	var PORT = process.env.PORT || 3000;
		var NextMealsID = 1;		

app.use(bodyParser.json());

//GET /startpage

app.get('/', function(req, res){
	app.use(express.static(__dirname + '/startpage'));
    res.sendFile('startpage/index.html', {root: __dirname })
});

//GET /menu *shows our menu, you can use this templates for POST

app.get('/menu', function(req, res)
{
	var query = req.query;
	var where = {};

	if (query.hasOwnProperty('q') && query.q.length > 0) 
	{
		where.description = {
			$like: '%' + query.q + '%'
		};
	}

	menu.findAll({attributes:['restaraunt', 'meal', 'description', 'amount', 'price'], where: where}).then(function (filteredMenu) 
	{
		res.send("\nOur menu*:\n"+
					JSON.stringify(filteredMenu,null,4)+
					"\n\n *Use this templates in POSTMAN for POST and for nice-looking queries in GET-filter");
	}, function (e) 
	{
		res.status(500).send();
	});
});

//GET /cart *shows your shopping cart with total cost

app.get('/cart', function(req, res)
{
		db.meal.findAll({
  attributes: ['id', 'restaraunt', 'meal', 'description', 'amount', 'price']
}).then(function(cart)
	{
		var total = 0;

		if(cart)
			{
				for(var i=0; i<cart.length; i++)
					{
						total += (cart[i].price * cart[i].amount);
					}
					res.send(JSON.stringify(cart,null,4)+"\n TOTAL COST: "+total);
			}
	}, 
				function(e) 
					{
						res.status(500).json(e);
					});

});

//GET /cart/:id *showing your meal by ID

app.get('/cart/:id', function(req, res){
	
var mealID = parseInt(req.params.id, 10);

db.meal.findById(mealID).then(function (meal) 
{
		if (meal) 
		{
			res.send(JSON.stringify(meal,null,4));
		} 
		else 
		{
			res.status(404).send("No meal found with this ID");
		}
}, function(e) 
	{
		res.status(500).send();
	});
});

//POST /cart *sending meals to your shopping cart

app.post('/cart', function(req, res){
	var body = _.pick(req.body, 'restaraunt', 'meal', 'description', 'amount', 'price');

	db.meal.create(body).then(function (meal) 
	{
		res.send("This meal successfully added to your shopping cart:\n"+
					JSON.stringify(meal,null,4));
	}, 
	function(e) 
	{
		res.status(400).send("\nPlease check the sent template!");
	});
});

//DELETE /cart/:id *removing meals from your shopping cart

app.delete('/cart/:id', function(req,res){
	var mealID = parseInt(req.params.id,10);
	
db.meal.findById(mealID).then(function (meal) 
{
		if (meal) 
		{			
			res.send("Meal with this ID="+mealID+" has been deleted: \n"+
				JSON.stringify(meal,null,4));
			
			db.meal.destroy({where:{
									id: mealID
									}
							});
		} 
		else 
		{
			res.status(404).send("No meal found with this ID");
		}
}, function(e) 
	{
		res.status(500).send();
	});
});

/*  <<<<<UNDER CONSTRUCTION>>>>>

//PUT /cart/:id

app.put('/cart/:id', function(req, res){
	var mealID = parseInt(req.params.id,10);
	var matchedMeal = _.findWhere(cart, {id: mealID});
	var body = _.pick(req.body, 'amount');
	var changeableValue = {};

	if(!matchedMeal)
	{
		res.status(404).json({"error": "meal with that ID not found"});
	}

	if(body.hasOwnProperty('amount') && _.isNumber(body.amount))
		{
			changeableValue.amount = body.amount;
		} 
	else 
		{
			return res.status(400).send();
		}

	matchedMeal = _.extend(matchedMeal, changeableValue);  //copy(add) 2nd object fields to 1st
	res.json(matchedMeal);
});
*/

db.sequelize.sync().then(function() {
app.listen(PORT, function()
{	
	console.log('Local server has been started!\n');
	console.log('Past this in your browser => localhost:' + PORT +" <=\n");
});
});
