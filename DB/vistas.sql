CREATE VIEW view_carrera AS 
SELECT carrera_id, carrera_nombre, tipoca_id, facultad_id, tipoca_nombre, facultad_nombre FROM  carrera NATURAL JOIN facultad NATURAL JOIN tipocarrera;