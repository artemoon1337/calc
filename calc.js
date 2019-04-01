function calcPlus(a,b){
	var a;
	var b;
	var result = a + b;
	return result;

}

function calcMinus(a,b){
	var a;
	var b;
	var result = a - b;
	return result;

}

function calcUmn(a,b){
	var a;
	var b;
	var result = a * b;
	return result;

}

function calcRazd(a,b){
	var a;
	var b;
	var result = a / b;
	return result;

}


function plus(){
	var a = document.getElementById('a').value;
	var a = parseInt(a);
	var b = document.getElementById('b').value;
	var b = parseInt(b);
	var result = calcPlus(a, b);

	document.getElementById('result').textContent = result;
}


function minus(){
	var a = document.getElementById('a').value;
	var a = parseInt(a);
	var b = document.getElementById('b').value;
	var b = parseInt(b);
	var result = calcMinus(a, b);

	document.getElementById('result').textContent = result;
}

function umn(){
	var a = document.getElementById('a').value;
	var a = parseInt(a);
	var b = document.getElementById('b').value;
	var b = parseInt(b);
	var result = calcUmn(a, b);

	document.getElementById('result').textContent = result;
}

function razd(){
	var a = document.getElementById('a').value;
	var a = parseInt(a);
	var b = document.getElementById('b').value;
	var b = parseInt(b);
	var result = calcRazd(a, b);

	document.getElementById('result').textContent = result;
}