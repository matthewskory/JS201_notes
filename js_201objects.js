// three ways to instantiate an Object

var foo = {}; // anonymous 
//^^ this is prefered!!!!!

var bar = new Object(); 
var baz = Object.create( null ); 

var fooWithProps = {
	aProp: true,
	bProp: "property",
	myMethod: function method(){
		console.log( "method" );
	}
};


var bike = {
	wheels: 	2,
	height: 	"26cm",
	color: 		"blue", 
	ringMyBell: function() {
		if(this.bell){
			console.log( "Bbbrrriinngg" );	
		}else{
			console.log( "i need a bell" );
		}
	},
	style: 		"bmx",
	bell: 	    false, 
	addBell: 	function(){
		this.bell = true;
	}
};
bike.ringMyBell();
bike.addBell();
bike.ringMyBell();

function ringGlobalBell(){
	console.log(this.bellSound);
}

// ringGlobalBell(); //undefined bc THIS. is refering to the global window object

// var bike1={
// 	bellSound: "ring, ring",
// 	ringBell: function() {
// 		console.log(this.bellSound);
// 	}
// };

// var bike2={
// 	bellSound: "ding, ding",
// 	ringBell: function() {
// 		console.log(this.bellSound);
// 	}
// };



// function ringGlobalBell( bike ){
// 	console.log( bike + ":"+ this.bellSound);
// }

// var bike1 = {
// 	bellSound: "ring, ring"
// };

// var bike2 = {
// 	bellSound: "ding, ding"
// };

// var bellSound = "dingaling";

// //call()
// ringGlobalBell.call(this, "global");

// ringGlobalBell.call(bike2, "bike2") ; //bike2: ding, ding

// //apply()

// ringGlobalBell.apply( this, [ "global" ]);
// ringGlobalBell.apply( bike1, [ "bike1" ]);
// ringGlobalBell.apply( bike2, [ "bike2" ]);

// //bind() - once bound it cannot be changed
// var ringBike1Bell = ringGlobalBell.bind( bike1 );
// ringBike1Bell("bike1"); // bike1:ring, ring

// var ringBike2Bell = ringGlobalBell.bind(bike2);
// ringBike2Bell("bike2"); //bike2:ding, ding

// bike2.ringBell = ringBike1Bell;
// bike2.ringBell("bike2"); //bike2:ring, ring

//Constructors

// function Bike( model){
// 	this.model = model;
// 	this.logModel = function() {
// 		console.log(this.model);
// 	};
// }

// var bike1 = new Bike("defy");
// var mountainBike = new Bike( "Monocog" );

// //instanceof checks to see if been created from a constructor
// console.log( bike1 instanceof Bike); //true

// console.log(bike1.model); //defy
// bike1.logModel(); //defy


// Bike.prototype.wheels = 2;
// console.log(bike1.wheels); //2

function Bike( model ){
	this.model = model;
}
Bike.prototype = {
	wheels: 2,
	logModel: function(){
		console.log( this.model );
	}
};
var bike1 = new Bike("defy");
console.log(bike1.constructor);
