var vendingMachine = {

	snickers : 1.00,
        gushers : .50,
        gum : .25,
        chips : 1.50,
        Soda : 2.00,
        Water : 1.00, 
}

function returnItems(value){
	return value;
}
console.log(returnItems(vendingMachine));

var totalTender = 0;

function currency(num) {
	if(typeof num  ===  "number"){
	totalTender += currency;
	}else{
	console.log("That is not a correct value");
	}
}

currency(2.00);
console.log("Total tender is: " + totalTender);

function selectItem(item){
	if(!vendingMachine[item]){
		console.log("Item is not in vending machine");
	}
	else if (totalTender < vendingMachine[item]){
		console.log("That is not enough");
	}else{
		console.log("Item dispensed.");
	}
}

currency(3.00)
selectItem("Water");

function changeReturn(totalTender, selectItem){
	return value;
}
 
var changeReturn = totalTender 
