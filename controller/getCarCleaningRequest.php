<?php
include('../classes/classes.tenant.php');
$obj_tenant = new Tenant();

$result['tenants'] 		= $obj_tenant->getTenants();
echo json_encode($result);
?>