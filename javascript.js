const submitButton = document.getElementById("submit_button");

//JavaScript function that enables or disables a submit button depending
//on whether a checkbox has been ticked or not.
function terms_changed(termsCheckBox) {
	//If the checkbox has been checked
	if (termsCheckBox.checked) {
		//Set the disabled property to FALSE and enable the button.
		submitButton.disabled = false;
	} else {
		//Otherwise, disable the submit button.
		submitButton.disabled = true;
	}
}

//Form reset when you press the return button
const returnDiv = document.getElementById("return");
const completeDiv = document.getElementById("return-complete");
const form = document.getElementById("myForm");
const terms = document.getElementById("terms_and_conditions");

submitButton.addEventListener("click", submit);


//Submit button that loops through the forms to see if they are filled out 
//and filled out correctly, if they are done correctly the "return-form" div is hidden 
//with a smooth scrolling transaction and you get the "return-complete" div with a message 
//and a button to return. 
function submit(e) {
	e.preventDefault();

	if (form.checkValidity()) {
		returnDiv.style.display = "none";
		completeDiv.style.display = "block";

		window.scrollTo({ top: 0, behavior: "smooth" });
	} else {
		document.querySelectorAll(":invalid")[1].focus();
		form.childNodes.forEach((child) => {
			if (child.validity && !child.validity.valid) {
				child.classList.add("error");

				const getError = document.getElementById(`${child.id}-errorMessage`);
				getError.innerText = child.validationMessage;
			}
		});
	}
}

//Function that removes the error message in input fields.

function removeErrorMessage(el) {
	console.log("triggered!!!");
	if (el.classList.contains("error")) {
		// check whether the current element contains class 'error'
		el.classList.remove("error");
		el.nextElementSibling.innerText = "";
	}
}

function reset() {
	returnDiv.style.display = "block";
	completeDiv.style.display = "none";

	form.reset();
	terms.checked = false;

	terms_changed(terms);
}
