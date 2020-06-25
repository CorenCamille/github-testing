var marble = [];

marble.push("Blue");
marble.push("Green");
marble.push("Blue");
marble.push("Orange");
marble.push("Purple");
marble.push("Red");
marble.push("Blue");
marble.push("Green");

console.log("The number of marbles in the bag is " + marble.length);

var total = 0;

for (var i = 0; i < marble.length; i++) {

	if (marble[i] == "Blue") { 
	total++
	}

}

console.log("The total number of blue marbles is " + total);
