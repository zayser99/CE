<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();


 $alumno_id = (isset($_POST['alumno_id'])) ? $_POST['alumno_id'] : '';

$consulta = "SELECT facultad_nombre, carrera_nombre, generacion FROM carrera_alumno NATURAL JOIN carrera NATURAL JOIN facultad WHERE alumno_id='$alumno_id' ";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data = $resultado->fetchAll(PDO::FETCH_ASSOC);


print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final el formato json a AJAX
$conexion = null;
