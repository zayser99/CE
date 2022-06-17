<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();
//recibimos por post el sala de la facultas
$almacen_sala = (isset($_POST['almacen_sala'])) ? $_POST['almacen_sala'] : '';

//recibimos la opcion (eliminar, modificar, agregar) y en dado caso que se ocupe la id para editar el registro 
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$almacen_id = (isset($_POST['almacen_id'])) ? $_POST['almacen_id'] : '';



switch ($opcion) {
    case 1: //agregar
        $consulta = "INSERT INTO almacen (almacen_id, almacen_sala) VALUES(null, '$almacen_sala') ";   //genramos el insert
        $resultado = $conexion->prepare($consulta); // lo ejeutamos
        $resultado->execute();

        $consulta = "SELECT * FROM almacen ORDER BY almacen_sala DESC LIMIT 1"; //ultimo dato en el orden alfabetico
        $resultado = $conexion->prepare($consulta);// la ejecutamos 
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);  // devolvemos la consulta
        break;
    case 2://editar
        $consulta = "UPDATE almacen SET almacen_sala='$almacen_sala' WHERE almacen_id='$almacen_id' "; //generamos el update
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();//ejecutamos el update 

        $consulta = "SELECT * FROM almacen WHERE almacen_id='$almacen_id' ";  // consultamos el editato 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);// devolvemos la consulta
        break;
    case 3://eliminar
        $consulta = "DELETE FROM almacen WHERE almacen_id='$almacen_id' "; //generamos el delete
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); //ejecutamos el delete
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final el formato json a AJAX
$conexion = null;
