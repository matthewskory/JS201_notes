
function Human(name, age, details){
	this.name = name;
	this.age = age;
	this.details = details;
}
human.prototype = {
	constructor: Human,
}



//object literal
var matt = {
	age : 32,
	interests: ["coding", "reading", "travel"],
	pets: {
		dog: "lundy",
		cat: ["Marley", "Marbles"]
	},
	hungry: true,
	married: true,
	city: "Carmel",
	state: "In",
	address: "14902 W. Blackwolf Run Dr"
};


