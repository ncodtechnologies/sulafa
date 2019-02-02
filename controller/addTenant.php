<?php
require_once('../classes/classes.tenant_request.php');
require_once('../classes/classes.tenant.php');
$obj_tenant = new TenantRequest();
$obj = new Tenant();

$id_tenant_request	=	$_POST['id_tenant_request'];
//$id_tenant_request	=1;
$result	=$obj_tenant ->getTenantRequest($id_tenant_request);
$name		=$result[0]['name'];
$room_no	=$result[0]['room_no'];
$emirates_id=$result[0]['emirates_id'];
$phone		=$result[0]['phone'];
$pass_hash	=$result[0]['pass_hash'];

echo json_encode($result);

$obj->addTenant($name,$room_no,$emirates_id,$phone,$pass_hash);
$obj_tenant->deleteTenantRequest($id_tenant_request);
?>

