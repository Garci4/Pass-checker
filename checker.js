function verify_password() {
	var password = document.getElementById("password").value;
	var msg;
	var minLength = 8;
	var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*=?¿!]{8,16}$/;
	var btn = document.getElementById("btn_do_something");
	
	btn.disabled = true;
	btn.value = "DO SOMETHING"

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
	} else {
		msg = "this is a good password, mate!";
		btn.disabled = false;
		btn.value = "SHARE IT!";
	}

	document.getElementById("chk_response").innerHTML = msg;
}

function share_it() {
	var url = "http://tiny.cc/ylcwtz";
	window.location.href = url;
}
