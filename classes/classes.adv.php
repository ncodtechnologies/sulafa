<?php
require_once('classes.database.php');
class Adv{
	public $link;
	
	function __construct(){
		$db_connection = new dbConnection();
		$this->link = $db_connection->connect();
		return $this->link;			
	}
	
	function getAdvs($id_tenant)
	{
		$_query = "SELECT * FROM adv where id_tenant=?";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant);
		$query->execute($values);
		return $query->fetchAll();
	}

	
	
} 
/*
$obj= new Adv();
echo json_encode($obj->getVisitors());*/
