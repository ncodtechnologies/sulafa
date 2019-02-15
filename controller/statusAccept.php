<?php
require_once('../classes/classes.visitor.php');
$obj_visitors = new Visitor();

$id_visitor =$_POST['id_visitor'];
$status		="1";
//$id_visitor   = 5;//isset($_GET['id_qt']) ? $_GET['id_qt'] : 0;
$result['visitors']		= $obj_visitors->updateStatus($status,$id_visitor);

?>