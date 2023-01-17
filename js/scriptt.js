const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	if (!checkInputs()) {
        e.preventDefault();
    }
});

function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    var check = true;

	
	if(emailValue === '') {
		setErrorFor(email, 'Please enter email');
        check = false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        check = false;
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Please enter password');
        check = false;
	} else {
		setSuccessFor(password);
	}
	
    if (check === false) {
        return false;
    } else{
        return true;
    }
}

function setErrorFor(input, message) {
	const inputContainer = input.parentElement;
	const small = inputContainer.querySelector('small');
	inputContainer.className = 'input-container error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const inputContainer = input.parentElement;
	inputContainer.className = 'input-container success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function alertFunction() {
    if(checkInputs()) {
        alert('Your have successfully signed in.')
    }
}