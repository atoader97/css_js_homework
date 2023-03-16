function showAlert()
{
 window.alert("This is a JavaScript alert!");
}

function validateForm() { // JS function
 var x, text; // define 2 variables
 x = document.getElementById("fname").value; // set a value to variable “x”

 if (x == null || x == "") { // check value of “x”
 text = "First name is mandatory!"; // set value of “text” variable
 }
 window.alert(text); // create a browser alert, displaying the value of “text”
}

function test() {
	var numeAlerta = "The following fields are invalid: ";
	var contactForm = document.getElementById('form');
	if (contactForm.checkValidity() == false) {
		var list = contactForm.querySelectorAll(':invalid');
		for (var input of list) {
			numeAlerta = numeAlerta + ", " + input.name
		}
		window.alert(numeAlerta); // create a browser alert
	}
	else { 
		window.location.replace('success.html')
			
	}
}

