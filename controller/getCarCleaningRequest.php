<?php
include('../classes/classes.car_cleaning.php');
$obj = new CarCleaning();

//$id_tenant=$_POST["id_tenant"];
$id_tenant=1;
$result['cars'] 		= $obj->getCarCleaningRequestDt($id_tenant);

echo json_encode($result);
?>