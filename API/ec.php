<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();
//recibimos por post los datos de la ec
$ec_numero = (isset($_POST['ec_numero'])) ? $_POST['ec_numero'] : '';
$almacen_id = (isset($_POST['almacen_id'])) ? $_POST['almacen_id'] : '';


//recibimos la opcion (eliminar, modificar, agregar) y en dado caso que se ocupe la id para editar el registro 
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$ec_id = (isset($_POST['ec_id'])) ? $_POST['ec_id'] : '';



switch ($opcion) {
    case 1: //agregar
        $consulta = "INSERT INTO ec (ec_id, ec_numero, almacen_id) VALUES(null, '$ec_numero', '$almacen_id') ";   //generamos el insert
        $resultado = $conexion->prepare($consulta); // lo ejeutamos
        $resultado->execute();

        $consulta = "SELECT * FROM ec ORDER BY ec_numero DESC LIMIT 1"; //ultimo dato en el orden alfabetico
        $resultado = $conexion->prepare($consulta);// la ejecutamos 
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);  // devolvemos la consulta
        break;
    case 2://editar
        $consulta = "UPDATE ec SET ec_numero='$ec_numero', almacen_id='$almacen_id' WHERE ec_id='$ec_id' "; //generamos el update
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();//ejecutamos el update 

        $consulta = "SELECT * FROM ec WHERE ec_id='$ec_id' ";  // consultamos el editato 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);// devolvemos la consulta
        break;
    case 3://eliminar
        $consulta = "DELETE FROM ec WHERE ec_id='$ec_id' "; //generamos el delete
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); //ejecutamos el delete
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final el formato json a AJAX
$conexion = null;
