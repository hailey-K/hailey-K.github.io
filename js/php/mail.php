<?php

 if( $_POST["email"] || $_POST["name"] || $_POST["message"]) {
      echo "Welcome ". $_POST["email"]. "<br />";
      echo "You are ". $_POST["name"]. " years old.";

	  return false;
      }

	  /*
$to = 'SomeOtherEmailAddress@Domain.com';
$subject = 'This is subject';
$message = 'This is body of email';
$from = "From: FirstName LastName <SomeEmailAddress@Domain.com>";
mail($to,$subject,$message,$from);
*/
?>