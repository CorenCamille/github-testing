var mixNums = [-1, 5, -25, -3, 99, 20];

var positiveNumbers = [];

var negativeNumbers = [];

for (var i = 0; i < mixNums.length; i++) {

	if(mixNums[i]>0) {
		positiveNumbers.push(mixNums[i]);
	} else if(mixNums[i]<0) {
		negativeNumbers.push(mixNums[i]);
 	}
}
console.log(positiveNumbers);

console.log(negativeNumbers);


