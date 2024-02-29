<?php

include_once('connection.php');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");

$conn = new DbConnection();
$db = $conn->connect();
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
case 'GET':
    $sql1 = "SELECT * FROM dogs JOIN info ON dogs.dog_id = info.dog_id";
    $stmt1 = $db->prepare($sql1);
    $stmt1->execute();
    $dogs = $stmt1->fetchAll(PDO::FETCH_ASSOC);        
    echo json_encode($dogs);
    // $sql2 = "SELECT * FROM info";
    // $stmt2 = $db->prepare($sql2);
    // $stmt2->execute();
    // $info = $stmt2->fetchAll(PDO::FETCH_ASSOC);        
    // echo json_encode($info);
    break;
}
