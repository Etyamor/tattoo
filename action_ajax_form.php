<?php

if (isset($_POST["phonenumber"]) ) { 

    $phone = $_POST["phonenumber"];
    mail('maxikrud0071@gmail.com','Запись на тату',$phone);
}

?>