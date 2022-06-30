<?php
include_once 'conexion.php';
$objeto = new conexion();
$conexion = $objeto->Conectar();

$matricula = (isset($_POST['matricula'])) ? $_POST['matricula'] : '';
$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$apellido = (isset($_POST['apellido'])) ? $_POST['apellido'] : '';
$ec = (isset($_POST['ec'])) ? $_POST['ec'] : '';
$listaCarreras = (isset($_POST['listaCarreras'])) ? $_POST['listaCarreras'] : '';
$listaDocumentos = (isset($_POST['listaDocumentos'])) ? $_POST['listaDocumentos'] : '';


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$alumno_id = (isset($_POST['alumno_id'])) ? $_POST['alumno_id'] : '';

switch ($opcion) {
    case 1:
        $consulta = "INSERT INTO alumno (alumno_id, alumno_matricula, alumno_nombre, alumno_apellido, ec_id)  VALUES(NULL, '$matricula', '$nombre', '$apellido', '$ec') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        //consultamos el id que se inserto 
        $consulta = "select @@identity as id;";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        //Leer variable con los datos
        foreach ($resultado as $value) {
            $alumno_id = $value['id'];
        }

        //insetamos las carreras del alumno
        $carreras = json_decode($listaCarreras, true);
        foreach ($carreras as $carrera) {
            $carrera_id =  $carrera['carrera_id'];
            $generacion =  $carrera['generacion'];
            $consulta = "INSERT INTO carrera_alumno (carrera_id, alumno_id, generacion) VALUES('$carrera_id', '$alumno_id', '$generacion') ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        }

        //insetamos los documentos del alumno
        $documentos = json_decode($listaDocumentos, true);
        foreach ($documentos as $documento) {
            $documento_id =  $documento['documento_id'];
            $cantidad =  $documento['cantidad'];
            $estado =  $documento['estado'];
            $consulta = "INSERT INTO documento_alumno (documento_id, alumno_id, cantidad, estado) VALUES('$documento_id', '$alumno_id', '$cantidad', '$estado') ";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
        }

        $consulta = "SELECT * FROM alumno ORDER BY alumno_id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;

    case 2:
        $consulta = "UPDATE alumno SET username='$username', first_name='$first_name', apellido='$apellido', ec='$ec', listaCarreras='$listaCarreras', listaCarreras='$listaCarreras' WHERE alumno_id='$alumno_id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();

        $consulta = "SELECT * FROM alumno WHERE alumno_id='$alumno_id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:
        $consulta = "DELETE FROM alumno WHERE alumno_id='$alumno_id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //envio el documentos final el formato json a AJAX
$conexion = null;
