console.log("Welcome To My Restaraunt!!!");

var menu = {
	jumbalya : 12,
	fries : 4.50,
	burger : 6,
	cornbread : 2
};

console.log("This is my menu:");
console.log(menu);

var add = function(itemA, itemB) {
	return itemA + itemB; 
}

var subtract = function(itemA, itemB) {
	return itemA - itemB;
}

var printTotal = function(total) {
console.log("My current total is " + total);
}
var total = 0;

printTotal(total);


total = add(total,menu.fries);
total = add(total,menu.jumbalya);
total = add(total,menu.cornbread);

printTotal(total);


var party = 3;

var gratuityScales = {
	1 : .01,
	2 : .03,
	3 : .10,
	4 : .15
}

var gratuityAmount = 0;

if(party == 1) {
	gratuityAmount = gratuityScales[1];
} else if(party == 2) {
	gratuityAmount = gratuityScales[2];
} else if(party == 2) {
        gratuityAmount = gratuityScales[3];
} else if(party == 4) {
        gratuityAmount = gratuityScales[1];
}

total += total * .10;

printTotal(total);
