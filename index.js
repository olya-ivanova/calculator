function plus(){
	let numberFirst;
	let numberSecond;
	let result;
	
	numberFirst = document.getElementById( 'number1' ).value;
	numberFirst = parseInt( numberFirst );
	
	numberSecond = document.getElementById( 'number2' ).value;
	numberSecond = parseInt( numberSecond );
	
	result = numberFirst + numberSecond;
	
	document.getElementById( 'output' ).innerHTML = result;	
}

function minus(){
	let numberFirst;
	let numberSecond;
	let result;
	
	numberFirst = document.getElementById( 'number1' ).value;
	numberFirst = parseInt( numberFirst );
	
	numberSecond = document.getElementById( 'number2' ).value;
	numberSecond = parseInt( numberSecond );
	
	result = numberFirst - numberSecond;
	
	document.getElementById( 'output' ).innerHTML = result;	
}
