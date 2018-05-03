const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;

const port = 9000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));




const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/rest-api';
mongoose.connect(mongoUri);



const recipeModels = require('./src/recipe.model');

const routes = require('./src/recipe.routes');
const appRoutes = routes(app);


const reviewModels = require('./src/review.model');
const reviewRoutes = require('./src/review.routes');
const AppReviewRoutes = reviewRoutes(app);


MongoClient.connect('mongodb://localhost/rest-api', (err, database) => {
	if (err) return console.log(err);
	db = database;
	app.listen(port, () => {
		console.log(`Listening on port ${port}!`);
	});
});

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});


