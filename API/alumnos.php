<?php
    $conexion = include_once "connect.php";
    $resultado = $conexion->query("SELECT * FROM actas ORDER BY acta_id desc");
    $actas = $resultado->fetch_all(MYSQLI_ASSOC);
