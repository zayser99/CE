--las carreras de un alumno
SELECT facultad_nombre , carrera_nombre, generacion FROM carrera_alumno NATURAL JOIN carrera NATURAL JOIN facultad WHERE alumno_id= 1;

--los documentos de un alumno
SELECT documento_nombre, cantidad, estado from documento NATURAL JOIN documento_alumno WHERE alumno_id=1;