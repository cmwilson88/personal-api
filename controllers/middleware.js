const user = require('../user');
const skillz = require('../skillz');
const secrets = require('../secrets');

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },

  generateSkillzId: function(req, res, next) {
    let length = skillz.length;
    req.body.id = length+1;
    next();
  },
  generateHobbiesId: function(req, res, next) {
    let length = user.hobbies.length;
    req.body.id = length + 1;
    next();
  },
  generateRestaurantsId: function(req, res, next) {
    let length = user.restaurants.length;
    req.body.id = length + 1;
    next();
  },

  verifyUser: function(req, res, next) {
    let username = req.params.username;
    let pin = req.params.pin;
    if(username === 'cmwilson' && pin === "1234") {
      next();
    } else {
      res.status(400).send("You have entered the wrong pin");
    }
  }
}