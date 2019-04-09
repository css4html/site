<?php
	require_once 'MCAPI.class.php';
	$api = new MCAPI('cc18ca27309b311801a3de9b9cbbd53a-us9');
	$merge_vars = array('NAME'=>$_POST["name"], 'PHONE'=>$_POST["phone"], 'COMPANY'=>$_POST["company"], 'MESSAGE'=>$_POST["message"]);
	
	// Submit subscriber data to MailChimp
	// For parameters doc, refer to: http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php
	$retval = $api->listSubscribe( 'bb6c06af7b', $_POST["email"], $merge_vars, 'html', false, true );
	
	if ($api->errorCode){
		echo "false";
	} else {
		echo "true";
	}
?>
