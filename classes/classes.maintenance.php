<?php
require_once('classes.database.php');
class Maintenance{
	public $link;
	
	function __construct(){
		$db_connection = new dbConnection();
		$this->link = $db_connection->connect();
		return $this->link;			
	}
	
	function getMaintenanceRequests($id_tenant)
	{
		$_query = "SELECT * FROM maintenance where id_tenant=?";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant);
		$query->execute($values);
		return $query->fetchAll();
	}

	function getMaintenanceRequestDt($id_maintenance_request)
	{
		$_query = "SELECT * FROM maintenance where id_maintenance_request=?";
		$query=$this->link->prepare($_query);
		$values=array($id_maintenance_request);
		$query->execute($values);
		return $query->fetchAll();
	}
	
	function reqMaintenance($type,$description,$date_available,$time_available,$id_tenant)
	{
		$_query = "INSERT INTO contractor (type,description,date,date_available,time_available,id_tenant) VALUES (?,?,CURDATE(),?,?,?)";
		$query=$this->link->prepare($_query);
		$values=array($type,$description,$date_available,$time_available,$id_tenant);
		$query->execute($values);
		return $this->link->lastInsertId();
	}
	
} 
/*
$obj= new Maintenance();
echo json_encode($obj->getMaintenanceRequests(1));
*/
