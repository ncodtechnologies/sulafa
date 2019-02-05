<?php
require_once('classes.database.php');
class CarCleaning{
	public $link;
	
	function __construct(){
		$db_connection = new dbConnection();
		$this->link = $db_connection->connect();
		return $this->link;			
	}
	
	function getCarCleaningRequests()
	{
		$_query = "SELECT * FROM car_cleaning";
		$query=$this->link->prepare($_query);
		$query->execute();
		return $query->fetchAll();
	}

	function getCarCleaningRequestDt($id_tenant)
	{
		$_query = "SELECT * FROM car_cleaning where id_tenant=?";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant);
		$query->execute($values);
		return $query->fetchAll();
	}
	
		
} 
/*
$obj= new CarCleaning();
echo json_encode($obj->getCarCleaningRequestDt(1));
*/
