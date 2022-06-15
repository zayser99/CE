--las carreras de un alumno
SELECT facultad_nombre , carrera_nombre, generacion FROM carrera_alumno NATURAL JOIN carrera NATURAL JOIN facultad WHERE alumno_id= 1;