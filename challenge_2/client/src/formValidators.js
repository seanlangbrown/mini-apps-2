



const	isValidEmail = function(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	}

const isValidPassword = function(password) {
		let number = false;
		let char = false;
		let special = false;
		for (var i = 0; i < password.length; i++) {
		  if (!isNaN(password[i])) {
		    number = true;
		  }
		  if (typeof password[i] === 'string' && !['@', '$', '%', '&', '*'].includes(password[i])) {
		  	char = true;
		  }
		  if (['@', '$', '%', '&', '*'].includes(password[i])) {
		    special = true
		  }
		  if (number && char && special) {
		  	return true;
		  }
		}
		//console.log(number, char, special);
		return false;
	}

export default { isValidPassword, isValidEmail };