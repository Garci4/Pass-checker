function verify_password() {
	var password = document.getElementById("password").value;
	var msg;
	var minLength = 8;
	var maxLength = 16;
	var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*=?¿!]{8,16}$/;

	console.log(password);
	console.log(password.length);
	
	var btn = document.getElementById("btn_share_id");

		if (!regularExpression.test(password)) {
			if (password.length < minLength && password.length > 0) {
				msg = "too short to be a password";
			} else {
				if (password == "") {
					msg = "you shuld put something";
				} else {
					msg = "Remember to put a number and a symbol";
				}
			}
			btn.style.display = "none";
		} else {
			msg = "this is a good password, mate!";
			btn.style.display = "block";
		}

	document.getElementById("chk_response").innerHTML = msg;

}
