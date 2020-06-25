var cars = {
	type : "Dodge Charge",
	color : "Black",	
	engine : "V8",
	price : 40000,
	amentities : ["Auto Stop", "Self Drive", "Bluetooth", "Surround Sound"],
	start : function(has_keys) {
	
			if(has_keys) {
				console.log("The car starts");
		} else {
			console.log("You need the keys to the car");
		}
	}	
}

console.log("A " + cars.color + "" + cars.type + " costs " + cars.price);

function carInfo() {
	console.log("A " + cars.color + "" + cars.type + " costs " + cars.price);
}

carInfo();

cars["color"] = "Blue";
cars["price"] = 50000;

for(var i=0; i <cars.amentities.length; i++) {
	console.log("This car has : " + cars.amentities[i]);
}

cars.start(false);

cars.start(true);
