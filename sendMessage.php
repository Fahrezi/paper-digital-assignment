<?php 
  if(isset($_POST['submit'])) {
    $message = $_POST['message'];
    $no_wa = 6282210368603;

    header("location:https://web.whatsapp.com/send?phone=$no_wa&text=$message");
  } else {
    echo "404 Not Found !";
  }
?>