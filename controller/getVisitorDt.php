<?php
require_once('../classes/classes.visitor.php');
$obj_visitors = new Visitor();

$id_visitor =$_POST['id_visitor'];
//$id_visitor   = 5;//isset($_GET['id_qt']) ? $_GET['id_qt'] : 0;
$result['visitors']		= $obj_visitors->getVisitorDt($id_visitor);

echo json_encode($result);
?>