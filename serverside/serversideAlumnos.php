<?php
require 'serverside.php';
$table_data->get('view_alumno', 'alumno_id', array('alumno_id', 'alumno_matricula','alumno_nombre','alumno_apellido','ec_id','ec_numero','almacen_id','almacen_sala'));
?>	