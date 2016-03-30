var degree = "";
var temp;
var tempConv; 
function convertTemp(degree, temp) {
	if (degree==="c") {
			tempConv = (temp*(9/5)+32);
	}
	else if (degree==="f") {
			tempConv = (temp-32)*(5/9);
	}
}
console.log(tempConv)
// (f-32)*(5/9)
// (c*9/5)+32