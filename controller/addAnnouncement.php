<?php
require_once('../classes/classes.announcement.php');
$obj = new Announcement();

$title			=$_POST['title'];
$announcement	=$_POST['announcement'];
$date			=$_POST['date'];

$obj->addAnnouncement($title,$announcement,$date);
?>

