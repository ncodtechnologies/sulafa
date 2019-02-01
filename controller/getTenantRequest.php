<?php
include('../classes/classes.tenant_request.php');
$obj_tenant = new TenantRequest();

$result["tenants"] 		= $obj_tenant->getAllTenantRequest();
echo json_encode($result);
?>