<?php
require_once('classes.database.php');
class Announcement{
	public $link;
	
	function __construct(){
		$db_connection = new dbConnection();
		$this->link = $db_connection->connect();
		return $this->link;			
	}
	
	function getAnnouncementsOfTenant($id_tenant)
	{
		$_query = "SELECT *,DATE_FORMAT(date,'%d/%m/%Y') as _date  FROM announcement  WHERE id_announcement NOT IN (SELECT id_announcement FROM tenant_announcement WHERE STATUS=1 AND id_tenant=?)";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant);
		$query->execute($values);
		return $query->fetchAll();
	}
	
	function addAnnouncement($title,$announcement,$date)
	{
		$_query = "INSERT INTO announcement (title,announcement,date) VALUES (?,?,?)";
		$query=$this->link->prepare($_query);
		$values=array($title,$announcement,$date);
		$query->execute($values);
		return $this->link->lastInsertId();	
	}
	function getAnnouncement()
	{
		$_query = "SELECT * FROM announcement";
		$query=$this->link->prepare($_query);
		$query->execute();
		return $query->fetchAll();		
	}
	function deleteAnnouncement($id_announcement)
	{
		$_query = "DELETE FROM announcement where id_announcement=?";
		$query=$this->link->prepare($_query);
		$values=array($id_announcement);
		$query->execute($values);
		return $query->fetchAll();		
	}

} 
/*
$obj= new Announcement();
echo json_encode($obj->addAnnouncement("aa","abc","2019-10-23"));
*/