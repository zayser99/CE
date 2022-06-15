<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();

$facultad_nombre = (isset($_POST['facultad_nombre'])) ? $_POST['facultad_nombre'] : '';


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$facultad_id = (isset($_POST['facultad_id'])) ? $_POST['facultad_id'] : '';



switch ($opcion) {
    case 1:
        $consulta = "INSERT INTO facultad (facultad_id, facultad_nombre) VALUES(null, '$facultad_nombre') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT * FROM facultad ORDER BY facultad_nombre DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2:
        $consulta = "UPDATE facultad SET facultad_nombre='$facultad_nombre' WHERE facultad_id='$facultad_id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT * FROM facultad WHERE facultad_id='$facultad_id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:
        $consulta = "DELETE FROM facultad WHERE facultad_id='$facultad_id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final el formato json a AJAX
$conexion = null;
