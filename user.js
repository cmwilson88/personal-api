const user = {
	name: 'Christopher Wilson',
	location: 'Provo, Utah', 
	occupations: ['Sales Associate', 'School Psychologist', "Artist", "Web Developer", "Zookeeper"],
	hobbies: [
		{
			id: 1,
			name: 'Web Development',
			type: 'Current'
		},
		{
			id: 2,
			name: 'Overwatch',
			type: 'Current'
		},
		{
			id: 3,
			name: 'Photography',
			type: 'Current'
		},
		{
			id: 4,
			name: 'Bass Guitar',
			type: 'Past'
		}
	],
	family: [
		{
			name: 'Megan Wilson',
			relation: 'Spouse',
			gender: 'Female'
		},
		{
			name: 'Matthew Wilson',
			relation: 'Brother',
			gender: 'Male'
		},
		{
			name: 'Molly Wilson',
			relation: 'Sister',
			gender: 'Female'
		}
	],
	restaurants: [
		{
			id: 1,
			name: "Satchel's Pizza",
			type: 'Pizza', 
			rating: 4.5
		},
		{
			id: 2,
			name: 'Bento Sushi',
			type: 'Sushi',
			rating: 4
		},
		{
			id: 3,
			name: 'Blaze Pizza',
			type: 'Pizza',
			rating: 4.25
		}
	],
};

module.exports = user;