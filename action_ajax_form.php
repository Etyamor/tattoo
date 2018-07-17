<?php

if (isset($_POST["phonenumber"]) ) { 

    $result = $_POST["phonenumber"];
    mail('maxikrud0071@gmail.com','Запись на тату',$result);

    echo json_encode($result);
}

?>