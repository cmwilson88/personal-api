const user = require('../user');
const skillz = require('../skillz');
const secrets = require('../secrets');

module.exports = {
	getName: function(req, res) {
		res.status(200).send({"name": user.name})
	},
	updateName: function(req, res) {
		user.name = req.body.name;
		res.status(200).send({updatedName: user.name})
	},


	getLocation: function(req, res) {
		res.status(200).send({"location": user.location})
	},
	updateLocation: function(req, res) {
		user.location = req.body.location;
		res.status(200).send({udpatedLocation: user.location});
	},


	getOccupations: function(req, res) {
		if (req.query) {
			let occupationsToReturn = user.occupations.map(e=>e);
			switch(req.query.order) {
				case ('desc'): 
					occupationsToReturn.sort((a,b) => a < b);
					res.status(200).send({OccupationsZA: occupationsToReturn});
					break;
				case ('asc'):
					occupationsToReturn.sort((a,b) => a > b);
					res.status(200).send({OccupationsAZ: occupationsToReturn});
					break;
				default:
					res.status(200).send({occupations: user.occupations});
			}
		}
		res.status(200).send({"occupations": user.occupations});
	},
	getOccupationByName: function(req, res) {
		let name = req.params.name.replace('+', ' ');
		let occupations = user.occupations.filter(occupation => occupation === name);
		res.status(200).send({occupationByName: occupations})
	},
	getLatestOccupation: function(req, res) {
		res.status(200).send({"latestOccupation": user.occupations.slice(user.occupations.length-1, user.occupations.length)})
	},
	addOccupation: function(req, res) {
		let newOccupation = req.body.occupation;
		user.occupations.push(newOccupation);
		res.status(200).send({newOccupation: newOccupation});
	},


	getHobbies: function(req, res) {
		if(req.query) {
			if(req.query.name) {
				let name = req.query.name.replace("+", " ");
				let hobbies = user.hobbies.filter(hobby => hobby.name === name);
				res.status(200).send({selectedHobbies: hobbies})
			}
		}
		res.status(200).send({hobbies: user.hobbies})
	},
	getHobbiesByType: function(req, res) {
		let type = req.params.type;
		let hobbies = user.hobbies.filter(hobby => hobby.type === type);
		res.status(200).send({hobbiesByType: hobbies})
	},
	addHobby: function(req, res) {
		let newHobby = {
			id: req.body.id,
			name: req.body.name, 
			type: req.body.type
		}
		user.hobbies.push(newHobby)
		res.status(200).send({newHobby: newHobby})
	},
	updateHobby: function(req, res) {
		var hobbyToUpdate = user.hobbies.find(hobby => hobby.id == req.params.id);
		hobbyToUpdate.id = req.body.id || hobbyToUpdate.id;
		hobbyToUpdate.name = req.body.name || hobbyToUpdate.name;
		hobbyToUpdate.type = req.body.type || hobbyToUpdate.type;
		res.status(200).send({updatedHobby: hobbyToUpdate})
	},


	getFamily: function(req, res) {
		res.status(200).send({family: user.family});
	},
	getFamilyByGender: function(req, res) {
		let gender = req.params.gender;
		let family = user.family.filter(member => member.gender === gender);
		res.status(200).send({familyByGender: family})
	},
	addFamilyMember: function(req, res) {
		let newFamilyMember = {
			name: req.body.name, 
			relation: req.body.relation, 
			gender: req.body.gender
		};
		user.family.push(newFamilyMember);
		res.status(200).send(newFamilyMember);
	},


	getRestaurants: function(req, res) {
		if(req.query) {
			let restaurantsToReturn = user.restaurants.map(e=>e);
			switch (req.query.order) {
				case ('asc'):
					restaurantsToReturn.sort((a,b) => a.rating > b.rating );
					res.status(200).send({LowRating: restaurantsToReturn});
					break;
				case ('desc'):
					restaurantsToReturn.sort((a,b) => a.rating < b.rating);
					res.status(200).send({HighRating: restaurantsToReturn});
					break;
				default: 
					res.status(200).send({restaurants: user.restaurants})
			}
		}

		res.status(200).send({restaurants: user.restaurants});
	},
	getRestaurantsByName: function(req, res) {
		console.log(req.params.name)
		let name = req.params.name.replace('+', ' ');
		let restaurants = user.restaurants.filter(e => e.name === name)
		res.status(200).send({restaurantByName: restaurants})
	},
	addRestaurant: function(req, res) {
		let newRestaurant = {
			id: req.body.id,
			name: req.body.name,
			type: req.body.type,
			rating: req.body.rating
		};
		user.restaurants.push(newRestaurant);
		res.status(200).send(newRestaurant);
	},
	updateRestaurant: function(req, res) {
		var restaurantToUpdate = user.restaurants.find(restaurant => restaurant.id == req.params.id);
		restaurantToUpdate.id = req.body.id || restaurantToUpdate.id;
		restaurantToUpdate.name = req.body.name || restaurantToUpdate.name;
		restaurantToUpdate.type = req.body.type || restaurantToUpdate.type;
		restaurantToUpdate.rating = req.body.rating || restaurantToUpdate.rating;
		res.status(200).send({updatedRestaurant: restaurantToUpdate})
	},


	getSkillz: function(req, res) {
		if(req.query) {
			if(req.query.experience) {
				let experience = req.query.experience;
				let skills = skillz.filter(skill => skill.experience === experience);
				res.status(200).send(skills)
			}
		}
		res.status(200).send(skillz);
	},
	getSkillzByName: function(req, res) {
		let name = req.params.name.replace('+', ' ');
		let skills = skillz.filter(skill=> skill.name === name);
		res.status(200).send(skills);
	},
	addSkill: function(req, res) {
		let newSkill = {
			id: req.body.id,
			name: req.body.name,
			experience: req.body.experience
		}
		skillz.push(newSkill);
		res.status(200).send(newSkill);
	},



	getSecrets: function(req, res) {
		res.status(200).send(secrets);
	}

}