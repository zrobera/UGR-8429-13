function validate() {
	var password = document.getElementById("password").value;
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
	if( document.myForm.password.value == "" ) {
		 alert( "Please provide password!");
		 document.myForm.password.focus() ;
		 return false;
	}
	 return( alert ('You have succesfully signed up!') );
 }