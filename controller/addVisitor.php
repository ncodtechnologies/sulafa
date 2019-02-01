<?php
require_once('../classes/classes.visitor.php');

$result["result"] = "POST";

echo json_encode($result);

return;

$obj_visitors = new Visitor();

$id_tenant   = 1;//isset($_GET['id_qt']) ? $_GET['id_qt'] : 0;

$name = "visitor";
$date = "";
$pass_hash = "";
$gate_access = "";
$valley_access = "";


$add_visitor		= $obj_visitors->addVisitor($name,$date,$pass_hash,$gate_access,$valley_access,$id_tenant);

$result["add_visitor"] = $add_visitor;

echo json_encode($result);
?>