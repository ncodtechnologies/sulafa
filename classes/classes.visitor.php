<?php
require_once('classes.database.php');
class Visitor{
	public $link;
	
	function __construct(){
		$db_connection = new dbConnection();
		$this->link = $db_connection->connect();
		return $this->link;			
	}

	function getVisitors($id_tenant)
	{
		$_query = "SELECT * FROM visitor v,tenant t where v.id_tenant=t.id_tenant and v.id_tenant=?";
		$query=$this->link->prepare($_query);
		$values=array($id_tenant);
		$query->execute($values);
		return $query->fetchAll();
	}
	function getAllVisitors()
	{
		$_query = "SELECT * FROM visitor";
		$query=$this->link->prepare($_query);
		$query->execute();
		return $query->fetchAll();
	}
	function getVisitorDt($id_visitor)
	{
		$_query = "SELECT * FROM visitor where id_visitor=?";
		$query=$this->link->prepare($_query);
		$values=array($id_visitor);
		$query->execute($values);
		return $query->fetchAll();
	}
	function addVisitor($name,$gate_access,$valley_access,$pass_hash,$date,$id_tenant,$status)
	{
		$_query="INSERT into visitor(name,gate_access,valley_access,pass_hash,date,id_tenant,status) VALUES (?,?,?,?,?,?,?);";
		$query=$this->link->prepare($_query);
		$values=array($name,$gate_access,$valley_access,$pass_hash,$date,$id_tenant,$status);
		$query=execute($values);
		return $query->RowCount()>0;		
	}
	function updateVisitor($name,$gate_access,$valley_access,$pass_hash,$date,$id_tenant,$status,$id_visitor)
	{
		$_query="UPDATE visitor SET name=?,date=?,gate_access=?,valley_access=?,pass_hash=?,id_tenant=?,status=? where id_visitor=?;";
		$query=$this->link->prepare($_query);
		$values=array($name,$gate_access,$valley_access,$pass_hash,$date,$id_tenant,$id_visitor,$status);
		$query=execute($values);
		return $query->RowCount()>0;
	}
	function deleteVisitor($id_visitor)
	{
		$_query = "DELETE * FROM visitor where id_visitor=?";
		$query=$this->link->prepare($_query);
		$values=array($id_visitor);
		$query->execute($values);
		return $query->fetchAll();
	}
	function updateStatus($status,$id_visitor)
	{
		$_query="UPDATE visitor SET status=? where id_visitor=?;";
		$query=$this->link->prepare($_query);
		$values=array($status,$id_visitor);
		$query=execute($values);
		return $query->RowCount()>0;
	}
} 
/*
$obj= new Visitor();
echo json_encode($obj->getAllVisitors());
*/