<?php
require_once('../classes/classes.adv.php');
$obj = new Adv();

$id_adv =$_POST['id_adv'];
$status		="1";
//$id_visitor   = 5;//isset($_GET['id_qt']) ? $_GET['id_qt'] : 0;
$result['advs']		= $obj->updateStatus($status,$id_adv);

?>