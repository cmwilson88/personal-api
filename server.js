const bodyParser = require('body-parser'),
	  express 	 = require('express'),
	  app		 = express();

const skillz = require('./skillz');
const user = require('./user');


const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');


app.use(bodyParser.json());
app.use(middleware.addHeaders);

// name routes
app.get('/name', mainCtrl.getName);
app.put('/name', mainCtrl.updateName);

//location routes
app.get('/location', mainCtrl.getLocation);
app.put('/location', mainCtrl.updateLocation);

// occupation routes
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/occupations/:name', mainCtrl.getOccupationByName)
app.post('/occupations', mainCtrl.addOccupation);


// hobbies routes
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.post('/hobbies', middleware.generateHobbiesId, mainCtrl.addHobby);
app.put('/hobbies/edit/:id', mainCtrl.updateHobby);

// family routes
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.post('/family', mainCtrl.addFamilyMember);

// restaurant routes
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);
app.post('/restaurants', middleware.generateRestaurantsId, mainCtrl.addRestaurant);
app.put('/restaurants/edit/:id', mainCtrl.updateRestaurant)
// skillz routes
app.get('/skillz', mainCtrl.getSkillz);
app.get('/skillz/:name', mainCtrl.getSkillzByName);
app.post('/skillz', middleware.generateSkillzId, mainCtrl.addSkill);

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets)

app.listen(3000, () => console.log('Server started for Personal API'));