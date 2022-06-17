<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();
//recibimos por post los datos de la carrera
$carrera_nombre = (isset($_POST['carrera_nombre'])) ? $_POST['carrera_nombre'] : '';
$tipoca_id = (isset($_POST['tipoca_id'])) ? $_POST['tipoca_id'] : '';
$facultad_id = (isset($_POST['facultad_id'])) ? $_POST['facultad_id'] : '';


//recibimos la opcion (eliminar, modificar, agregar) y en dado caso que se ocupe la id para editar el registro 
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$carrera_id = (isset($_POST['carrera_id'])) ? $_POST['carrera_id'] : '';



switch ($opcion) {
    case 1: //agregar
        $consulta = "INSERT INTO carrera (carrera_id, carrera_nombre, tipoca_id, facultad_id ) VALUES(null, '$carrera_nombre', '$tipoca_id', '$facultad_id') ";   //genramos el insert
        $resultado = $conexion->prepare($consulta); // lo ejeutamos
        $resultado->execute();

        $consulta = "SELECT * FROM carrera ORDER BY carrera_nombre DESC LIMIT 1"; //ultimo dato en el orden alfabetico
        $resultado = $conexion->prepare($consulta);// la ejecutamos 
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);  // devolvemos la consulta
        break;
    case 2://editar
        $consulta = "UPDATE carrera SET carrera_nombre='$carrera_nombre', tipoca_id='$tipoca_id', facultad_id='$facultad_id' WHERE carrera_id='$carrera_id' "; //generamos el update
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();//ejecutamos el update 

        $consulta = "SELECT * FROM carrera WHERE carrera_id='$carrera_id' ";  // consultamos el editato 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);// devolvemos la consulta
        break;
    case 3://eliminar
        $consulta = "DELETE FROM carrera WHERE carrera_id='$carrera_id' "; //generamos el delete
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); //ejecutamos el delete
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final el formato json a AJAX
$conexion = null;
