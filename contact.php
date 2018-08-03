<!-----

Author: Jonathan Woong

----->

<?php 

if (isset($_POST['submit'])) { // if user hits Submit button

	$firstname = $_POST["firstname"]; // get first name
	$lastname = $_POST["lastname"]; // get last name
	$email = $_POST["email"]; // get email
	$subject = $_POST["subject"].PHP_EOL; // get subject field

	$ext = '.txt'; // save as txt file
	$filename = $firstname.' '.$lastname.' '.$email; // name of txt file

	file_put_contents($filename.$ext, $subject, FILE_APPEND | LOCK_EX); // write contents to file

	header("Location:index.php?dc=formsubmit"); // redirect to new page
}

?>
