<?php
$connection = new PDO("mysql:dbname=carro;host=127.0.0.1", "root", "adimin");

$query = $connection->prepare("select * from carros");
$query->execute();

foreach($query->fetchAll() as $user) {
  var_dump($user);
}