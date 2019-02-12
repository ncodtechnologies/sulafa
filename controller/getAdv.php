<?php
require_once('../classes/classes.adv.php');
$obj = new Adv();

	//$id_tenant		=$_POST["id_tenant"];
	$id_tenant=1;
	$result["advs"] = $obj->getAdvs($id_tenant);

echo json_encode($result);
?>