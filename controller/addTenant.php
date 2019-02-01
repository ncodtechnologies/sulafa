<?php
require_once('../classes/classes.tenant_request.php');
$obj_tenant = new TenantRequest();

$id_tenant_request	=	$_POST['id_tenant_request'];
$result['tenantDt']	=$obj_tenant ->getTenantRequest($id_tenant_request);

echo json_encode($result);
//$obj_tenant->addTenant($name,$room_no,$emirates_id,$phone,$pass_hash);
?>

