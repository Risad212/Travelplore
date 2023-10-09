<?php
$con_name = $_POST['con_name'];
$con_email = $_POST['con_email'];
$con_subject = $_POST['con_subject'];
$con_phone = $_POST['con_phone'];
$con_message = $_POST['con_message'];


$to = 'example@gmail.com';
   
$subject = 'Stephans Form';

$message = '<strong>Name : </strong>'.$con_name.'<br/><br/>';

$message .= $con_message.'<br/>';


$headers = 'From: '.$con_name.' '.$con_email . "\r\n" ;
$headers .='Reply-To: '. $to . "\r\n" ;
$headers .='X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

mail($to,$subject,$message,$headers);
echo 1;