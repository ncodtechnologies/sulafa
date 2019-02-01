<?php
require_once('../classes/classes.visitor.php');
$obj_visitors = new Visitor();

if (isset($_POST["id_tenant"]))
       {
	$id_tenant		=$_POST["id_tenant"];
	$result["visitors"] 	= $obj_visitors->getVisitors($id_tenant);
}
if (empty($_POST["id_tenant"]))
	$result["visitors"] 	= $obj_visitors->getAllVisitors();	

echo json_encode($result);
?>