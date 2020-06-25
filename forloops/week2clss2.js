var years = [1991, 1984, 1984, 1989];

var record ={};

for (var i = 0; i < years.length; i++) {
	if(record[years[i]]) {
		record[years[i]= record[years[i]]+1;
	} else {
	record[years[i]]=1;
	}
}

console.log(record);


