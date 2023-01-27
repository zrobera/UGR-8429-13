function validate() {
	var fullName = document.getElementById("fullName").value;
	var phone = document.getElementById("phone").value;
	var message = document.getElementById("message").value;
	var fullNameValid = validateName(fullName);
	var phoneValid = validatePhone(phone);
 
 
	 if( document.myForm.fullName.value == "" ) {
		alert( "Please provide your FULL name!" );
		document.myForm.fullName.focus() ;
		return false;
	 }
	 if( document.myForm.phone.value == "" ) {
		 alert( "Please provide your PHONE Number!" );
		 document.myForm.phone.focus() ;
		 return false;
	  }
	  if( document.myForm.message.value == "" ) {
		alert( "Please provide your MESSAGE!" );
		document.myForm.message.focus();
		return false;
	 }
	  if (!fullNameValid) {
	   alert("Invalid name. Please enter only letters.");
	   return false;
	  }
 
	 if (!phoneValid) {
		 alert("Invalid phone number. Please enter only digits.");
		 return false;
	 }
		 if( document.myForm.email.value == "" ) {
		 alert( "Please provide your Email!" );
		 document.myForm.email.focus() ;
		 return false;
		 }
	 var emailID = document.myForm.email.value;
	 atpos = emailID.indexOf("@");
	 dotpos = emailID.lastIndexOf(".");
	 
	 if (atpos < 1 || ( dotpos - atpos < 2 )) {
		alert("Please enter correct email")
		document.myForm.email.focus() ;
		return false;
	 }
	 return( alert ('Thank you for contacting us') );
 }
 
 function validateName(name) {
	 var nameRegex = /^[a-zA-Z ]+$/;
	 return nameRegex.test(name);
 }
 function validatePhone(num) {
	 var nameRegex = /^[0-9]+$/;
	 return nameRegex.test(num);
 }
 function searchAlert() {
	alert ('sorry,your search can not be submitted since we do not have database for the time being')
}