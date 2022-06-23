<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();
//recibimos por post los datos de la ec
$usuario_username = (isset($_POST['usuario_username'])) ? $_POST['usuario_username'] : '';
$usuario_password = (isset($_POST['usuario_password'])) ? $_POST['usuario_password'] : '';
$usuario_puesto = (isset($_POST['usuario_puesto'])) ? $_POST['usuario_puesto'] : '';


//recibimos la opcion (eliminar, modificar, agregar) y en dado caso que se ocupe la id para editar el registro 
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$usuario_id = (isset($_POST['usuario_id'])) ? $_POST['usuario_id'] : '';



switch ($opcion) {
    case 1: //agregar
        $consulta = "INSERT INTO usuario (usuario_id, usuario_username, usuario_password, usuario_puesto) VALUES(null, '$usuario_username', '$usuario_password', '$usuario_puesto') ";   //generamos el insert
        $resultado = $conexion->prepare($consulta); // lo ejeutamos
        $resultado->execute();

        $consulta = "SELECT * FROM usuario ORDER BY usuario_username DESC LIMIT 1"; //ultimo dato en el orden alfabetico
        $resultado = $conexion->prepare($consulta);// la ejecutamos 
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);  // devolvemos la consulta
        break;
    case 2://editar
        $consulta = "UPDATE usuario SET usuario_username='$usuario_username', usuario_password='$usuario_password', usuario_puesto='$usuario_puesto' WHERE usuario_id='$usuario_id' "; //generamos el update
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();//ejecutamos el update 

        $consulta = "SELECT * FROM usuario WHERE usuario_id='$usuario_id' ";  // consultamos el editato 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);// devolvemos la consulta
        break;
    case 3://eliminar
        $consulta = "DELETE FROM usuario WHERE usuario_id='$usuario_id' "; //generamos el delete
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); //ejecutamos el delete
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el array final el formato json a AJAX
$conexion = null;
