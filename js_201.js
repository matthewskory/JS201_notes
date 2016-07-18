//JS 201 notes

//JS Types
//strings
//numbers
//boolean
//null
//undefined

//arrays (built in type)
	var arry = new Array(16); //make new array with 16 spots in it
	var items = new Array();//array 
	console.log(arry.join("cheese")); //cheesecheesecheesecheesecheesecheesecheesecheesecheesecheesecheesecheesecheesecheesecheese
	console.log(arry); //empty array of 16 spaces


//Objects (built in type)
	var object1 = new Object(); //object1 = {}
	var object2 = object1;
	object1.myCustomProperty = 'Blah';
	console.log(object2.myCustomProperty); //'Blah'
	console.log(object2.myCustomProperty);

//built in types
	var now = new Date(); //date type
	var error = new Error("something is broke"); //error type
	var fn = new Function("console.log('function')"); //functions
	var regex = new RegExp("\\d+"); //regular expressions i.e. \g\sd 
	//teach yourself regular expressions in 10 minutes



//function declerations you dont actually need a ; since its not assigning a var like an expression does
	function square( number ) {
		return number * number;
	}

	console.log(square( 11 )); //121


//function expression - more commonly used
			//Anymous function made here hard to find errors
	var add = function( first, second ){
		return first + second;
	};

	console.log(add( 1, 2 )); //3


//function expression with identifer
	var factorial = function factorial( number){
		if (number < 2 ){
			return 1;
		}
						//recursion here because it references the function its declared within	
		return number * factorial( number - 1);
	};
	console.log(factorial( 5)); //120

//a simpler example of an expression with an identifer
	var sum = function innerSum( firstNum, secondNum ) {
		return firstNum + secondNum;
	};


//Hoisting function declerations are hoisted to the top but NOT function expressions - whoa!
	var result = squar( 11 );
	//the below will be available to result becuause it's a decleration
	function squar( number ) {
		return number * number;
}


//parameters

	function echo( value ){
		return ( value );
	}
	console.log( echo ( "hey" ));
	console.log( echo ( "don't pannic", 42 )); //will ignore the 42

	//arity - lets you know how many parameters are in a function
	console.log( echo.length ); // 1 bc it only expects 1 value

	//dont have to have an argument when you create it
	function echo2() {
		return arguments[ 0 ];
	}
	console.log(echo2('turkey')); //turkey

//add any number of values together

	function sum() {
		var result = 0,
			i=0,
			len = arguments.length;
		while ( i < len ) {
			result += arguments [i];
			i++;
		}
		return result;
	}
	//arguments are array like in that you can access it with an index
	console.log( sum (1, 2 ));
	console.log( sum (3, 4, 5, 6, 7 ));


