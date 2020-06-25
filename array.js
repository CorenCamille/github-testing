var myArray = ["Apples", "Pear", "Mango"];

myArray.push("Banana");
myArray.push("Tomato");
myArray.push("Kiwi");

console.log(myArray);

myArray.pop();

console.log(myArray.length);

console.log("For Loop Incrementing");

for(var i = 0; i< myArray.length; i++){
	console.log(myArray[i]);
}

console.log("For Loop Decrement");

for(var i=myArray.length-1; i>=0; i--) {
	console.log(myArray[i]);
}
