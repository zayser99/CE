<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();
//recibimos por post el nombre de la facultas
$facultad_nombre = (isset($_POST['facultad_nombre'])) ? $_POST['facultad_nombre'] : '';

//recibimos la opcion (eliminar, modificar, agregar) y en dado caso que se ocupe la id para editar el registro 
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$facultad_id = (isset($_POST['facultad_id'])) ? $_POST['facultad_id'] : '';



switch ($opcion) {
    case 1: //agregar
        $consulta = "INSERT INTO facultad (facultad_id, facultad_nombre) VALUES(null, '$facultad_nombre') ";   //genramos el insert
        $resultado = $conexion->prepare($consulta); // lo ejeutamos
        $resultado->execute();

        $consulta = "SELECT * FROM facultad ORDER BY facultad_nombre DESC LIMIT 1"; //ultimo dato en el orden alfabetico
        $resultado = $conexion->prepare($consulta);// la ejecutamos 
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);  // devolvemos la consulta
        break;
    case 2://editar
        $consulta = "UPDATE facultad SET facultad_nombre='$facultad_nombre' WHERE facultad_id='$facultad_id' "; //generamos el update
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();//ejecutamos el update 

        $consulta = "SELECT * FROM facultad WHERE facultad_id='$facultad_id' ";  // consultamos el editato 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);// devolvemos la consulta
        break;
    case 3://eliminar
        $consulta = "DELETE FROM facultad WHERE facultad_id='$facultad_id' "; //generamos el delete
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); //ejecutamos el delete
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final el formato json a AJAX
$conexion = null;
