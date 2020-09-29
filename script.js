// Assignment Code
var _length = document.querySelector ('input[name="length"]');
var _lowercase = document.querySelector ('input[name="lowercase"]');
var _uppercase = document.querySelector ('input[name="uppercase"]');
var _number = document.querySelector ('input[name="number"]');
var _symbol = document.querySelector ('input[name="symbol"]');
var generateBtn = document.querySelector('generatePassword');

const key_strings = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      number: '0123456789',
      symbol: '@#$%&(){}[]!'

};


// Add event listener to generate button
    generateBtn.addEventListener("click", () => {
      var length = + length.value;
      var activeLower = lowercase.checked;
      var activeUpper = uppercase.checked;
      var activeNumber = number.checked;
      var activeSymbol = symbol.checked;

      generatePassword (activeLower, activeUpper, activeNumber, activeSymbol, length);

});

// Write password to the #password input
function writePassword(lower, upper, num, sym, length) {
  let MAIN_STRING = "";
	let PASSWORD = "";
	
	const options = {
		lowercase: lower,
		uppercase: upper,
		number: num,
		symbol: sym
	};
	
	for(i=0;i<Object.keys(options).length;i++){
		MAIN_STRING += (Object.values(options)[i]) ? key_strings[Object.keys(options)[i]] : "";
	}
	
	if(MAIN_STRING != "" && length > 0){
		for(i=0;i<length;i++){
			PASSWORD += MAIN_STRING[Math.floor(Math.random() * MAIN_STRING.length)];
		}
		
		document.querySelector('input[type="text"]').value = PASSWORD;
		
	}else{
		document.querySelector('input[type="text"]').value = "Include any key string and define the length!";
	}


}
