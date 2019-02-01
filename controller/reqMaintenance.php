<?php
require_once('../classes/classes.maintenance.php');
$obj_maintenance = new Maintenance();

$id_tenant   = 1;//isset($_GET['id_qt']) ? $_GET['id_qt'] : 0;

$type="";
$description="";
$date_available="";
$time_available="";


$req_maintenance		= $obj_maintenance->reqMaintenance($type,$description,$date_available,$time_available,$id_tenant);

$result["req_maintenance"] = $req_maintenance;

echo json_encode($result);
?>