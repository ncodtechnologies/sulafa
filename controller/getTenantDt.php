<?php
require_once('../classes/classes.tenant.php');
$obj_tenant = new Tenant();
$id_tenant		=	$_POST['id_tenant'];
//$id_tenant   = 1;//isset($_GET['id_qt']) ? $_GET['id_qt'] : 0;
$result['tenants']		= $obj_tenant->getTenantDt($id_tenant);

echo json_encode($result);
?>