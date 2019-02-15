<?php
include('../classes/classes.announcement.php');
$obj = new Announcement();

$result['announcements'] 		= $obj->getAnnouncement();
echo json_encode($result);
?>