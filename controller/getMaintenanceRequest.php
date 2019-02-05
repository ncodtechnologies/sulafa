<?php
include('../classes/classes.maintenance.php');
$obj = new Maintenance();

//$id_tenant=$_POST["id_tenant"];
$id_tenant=1;

$result['maintenance'] 		= $obj->getMaintenanceRequests($id_tenant);
echo json_encode($result);
?>