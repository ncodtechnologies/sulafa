<?php
require_once('classes.database.php');
class TenantRequest{
	public $link;
	
	function __construct(){
		$db_connection = new dbConnection();
		$this->link = $db_connection->connect();
		return $this->link;			
	}
	
	function getAllTenantRequest()
	{
		$_query = "SELECT * FROM tenant_request";
		$query=$this->link->prepare($_query);
		$query->execute();
		return $query->fetchAll();
	}
	
	function getTenantRequest($id_tenant_request)
	{
		$_query = "SELECT * FROM tenant_request where id_tenant_request=?";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant_request);
		$query->execute($values);
		return $query->fetchAll();
	}
	
	function getTenantRequestDt($id_tenant)
	{
		$_query = "SELECT * FROM tenant_request where id_tenant=?";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant);
		$query->execute($values);
		return $query->fetchAll();
	}
	function deleteTenantRequest($id_tenant_request)
	{
		$_query = "DELETE FROM tenant_request where id_tenant_request=?";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant_request);
		$query->execute($values);
		return $query->fetchAll();
	}
} 
/*
$obj= new TenantRequest();
echo json_encode($obj->getTenantRequest(1));
*/
