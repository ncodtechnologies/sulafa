<?php
require_once('classes.database.php');
class Tenant{
	public $link;
	
	function __construct(){
		$db_connection = new dbConnection();
		$this->link = $db_connection->connect();
		return $this->link;			
	}
	
	function getTenants()
	{
		$_query = "SELECT * FROM tenant";
		$query=$this->link->prepare($_query);
		$query->execute();
		return $query->fetchAll();
	}
	
	function getTenantDt($id_tenant)
	{
		$_query = "SELECT * FROM tenant where id_tenant=?";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant);
		$query->execute($values);
		return $query->fetchAll();
	}
	
	function addTenant($name,$room_no,$emirates_id,$phone,$pass_hash)
	{
		$_query = "INSERT INTO tenant (name,room_no,emirates_id,phone,pass_hash)  VALUES (?,?,?,?,?)";
		$query=$this->link->prepare($_query);
		$values=array($name,$room_no,$emirates_id,$phone,$pass_hash);
		$query->execute($values);
		return $this->link->lastInsertId();
	}
} 
/*
$obj= new Tenant();
echo json_encode($obj->addTenant('d','12','1','1','12'));
*/
