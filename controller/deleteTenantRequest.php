<?php
require_once('../classes/classes.tenant_request.php');
$obj_tenant = new TenantRequest();

$id_tenant_request	=	$_POST['id_tenant_request'];
$obj_tenant->deleteTenantRequest($id_tenant_request);
?>

