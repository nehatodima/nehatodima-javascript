<html> 
<head> 
<script> 
function reg()								 
{ 
	var name = document.forms["RegForm"]["Name"];			 
	var email = document.forms["RegForm"]["EMail"]; 
	var phone = document.forms["RegForm"]["Telephone"]; 
	var what = document.forms["RegForm"]["Subject"]; 
	var password = document.forms["RegForm"]["Password"]; 
	var address = document.forms["RegForm"]["Address"]; 

	if (name.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 

	if (address.value == "")							 
	{ 
		window.alert("Please enter your address."); 
		address.focus(); 
		return false; 
	} 
	
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (phone.value == "")						 
	{ 
		window.alert("Please enter your telephone number."); 
		phone.focus(); 
		return false; 
	} 

	if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 

	if (what.selectedIndex < 1)				 
	{ 
		alert("Please enter your course."); 
		what.focus(); 
		return false; 
	} 

	return true; 
}</script> 

<style> 
reg {										 
	margin-left: 70px; 
	font-weight: bold ; 
	float: left; 
	clear: left; 
	width: 100px; 
	text-align: left; 
	margin-right: 10px; 
	font-family:sans-serif,bold, Arial, Helvetica; 
	font-size:14px; 
} 

div { 
	box-sizing: border-box; 
	width: 100%; 
	border: 100px solid black; 
	float: left; 
	align-content: center; 
	align-items: center; 
} 

form {										 
	margin: 0 auto; 
	width: 600px; 
}</style></head> 

<body> 
<h1 style="text-align: center"> REGISTRATION FORM </h1>		 
<form name="RegForm" action="/submit.php" onsubmit="return reg()" method="post"> 
	
	<p>Name: <input type="text" size=65 name="Name"> </p><br>	 
	<p> Address: <input type="text" size=65 name="Address"> </p><br> 
	<p>E-mail Address: <input type="text" size=65 name="EMail"> </p><br> 
	<p>Password: <input type="text" size=65 name="Password"> </p><br> 
	<p>Telephone: <input type="text" size=65 name="Telephone"> </p><br> 
		
	<p>SELECT YOUR COURSE 
		<select type="text" value="" name="Subject"> 
			<option>BTECH</option> 
			<option>BBA</option> 
			<option>BCA</option> 
			<option>B.COM</option> 
			<option>GEEKFORGEEKS</option> 
		</select></p><br><br> 
	<p>Comments: <textarea cols="55" name="Comment"> </textarea></p> 
	<p><input type="submit" value="send" name="Submit">	 
		<input type="reset" value="Reset" name="Reset"> 
	</p>		 
</form> 
</body> 
</html> 


