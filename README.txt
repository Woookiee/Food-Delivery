Happy Meal - Food Delivery *SIS3 project

Requests:
GET:
> /  			//Startpage;
> /menu  			//Our menu(templates for POSTing);
> /menu?q=<query> 	//Filter menu, find your query in meals description
> /cart			//Shows your shopping cart with its contents, and counts total cost
> /cart/:id		//Shows meal with entered ID in your shopping cart

POST:
> /cart			//Add meal to your shopping cart

DELETE:
> /cart/:id		//Drop meal in your shopping cart with entered ID

PUT			//UNDER CONSTRUCTION

Templates:
menu =[
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
}];
