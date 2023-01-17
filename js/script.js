// testimonial slider
const testimonial__Samples = [...document.querySelectorAll('.testimonial__samples')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

testimonial__Samples.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// form validation for contact us page
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
	if (!checkInputs()) {
        e.preventDefault();
    }
});

function checkInputs() {
	// trim to remove the whitespaces
	const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	// const passwordValue = password.value.trim();
	const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();
    var check = true;

	
	if(fullnameValue === '') {
		setErrorFor(fullname, 'Please enter Full name');
        check  = false;
        
	} else {
		setSuccessFor(fullname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Please enter email');
        check = false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        check = false;
	} else {
		setSuccessFor(email);
	}
	
	// if(passwordValue === '') {
	// 	setErrorFor(password, 'Please enter password');
	// } else {
	// 	setSuccessFor(password);
	// }
	
	if(subjectValue === '') {
		setErrorFor(subject, 'Please enter subject');
        check = false;
	} else{
		setSuccessFor(subject);
	}
    if(messageValue === '') {
		setErrorFor(message, 'Please enter your message');
        check = false;
	} else{
		setSuccessFor(message);
	}
    if (check === false) {
        return false;
    } else{
        return true;
    }
}

function setErrorFor(input, message) {
	const inputBox = input.parentElement;
	const small = inputBox.querySelector('small');
	inputBox.className = 'input-box error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const inputBox = input.parentElement;
	inputBox.className = 'input-box success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function alertFunction() {
    if(checkInputs()) {
        alert('Your message has been submitted. Thank you for reaching out.')
    }
}
function searchAlert(){
    alert('Sorry, your search cannot be submitted since we do not have database in the time being.')
}

