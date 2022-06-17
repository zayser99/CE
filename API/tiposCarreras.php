<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();
//recibimos por post el nombre de la facultas
$tipoca_nombre = (isset($_POST['tipoca_nombre'])) ? $_POST['tipoca_nombre'] : '';

//recibimos la opcion (eliminar, modificar, agregar) y en dado caso que se ocupe la id para editar el registro 
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$tipoca_id = (isset($_POST['tipoca_id'])) ? $_POST['tipoca_id'] : '';



switch ($opcion) {
    case 1: //agregar
        $consulta = "INSERT INTO tipocarrera (tipoca_id, tipoca_nombre) VALUES(null, '$tipoca_nombre') ";   //genramos el insert
        $resultado = $conexion->prepare($consulta); // lo ejeutamos
        $resultado->execute();

        $consulta = "SELECT * FROM tipocarrera ORDER BY tipoca_nombre DESC LIMIT 1"; //ultimo dato en el orden alfabetico
        $resultado = $conexion->prepare($consulta);// la ejecutamos 
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);  // devolvemos la consulta
        break;
    case 2://editar
        $consulta = "UPDATE tipocarrera SET tipoca_nombre='$tipoca_nombre' WHERE tipoca_id='$tipoca_id' "; //generamos el update
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();//ejecutamos el update 

        $consulta = "SELECT * FROM tipocarrera WHERE tipoca_id='$tipoca_id' ";  // consultamos el editato 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);// devolvemos la consulta
        break;
    case 3://eliminar
        $consulta = "DELETE FROM tipocarrera WHERE tipoca_id='$tipoca_id' "; //generamos el delete
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); //ejecutamos el delete
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final el formato json a AJAX
$conexion = null;
