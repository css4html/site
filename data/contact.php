<?php	
	require_once 'MCAPI.class.php';
	$api = new MCAPI('c6204d240682dc5424d69089d8d07cfb-us9');	
	$merge_vars = array('FNAME'=>$_POST["nome"], 'PHONE'=>$_POST["telefone"], 'COMPANY'=>$_POST["empresa"], 'SERVICE'=>$_POST["servico"], 'MESSAGE'=>$_POST["mensagem"]);
	
	// Submit subscriber data to MailChimp
	// For parameters doc, refer to: http://apidocs.mailchimp.com/api/1.3/listsubscribe.func.php
	$retval = $api->listSubscribe( '2e94f5e4ff', $_POST["email"], $merge_vars, 'html', false, true );
	
	if ($api->errorCode){
		echo "false";
	} else {
		echo "true";
	}
?>
