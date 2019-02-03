<?php
include('../classes/classes.maintanace_request.php');
$obj_tenant = new Tenant();

$result['tenants'] 		= $obj_tenant->getCarCleaningRequests();
echo json_encode($result);
?>