<?php
require_once('../classes/classes.announcement.php');
$obj = new Announcement();

$id_announcement	=	$_POST['id_announcement'];
$obj->deleteAnnouncement($id_announcement);
$obj->getAnnouncement();
?>

