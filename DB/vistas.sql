CREATE VIEW view_carrera AS 
SELECT carrera_id, carrera_nombre, tipoca_id, facultad_id, tipoca_nombre, facultad_nombre FROM  carrera NATURAL JOIN facultad NATURAL JOIN tipocarrera;

CREATE VIEW view_ec AS 
SELECT ec_id, ec_numero, almacen_id, almacen_sala FROM  ec NATURAL JOIN almacen;

CREATE VIEW view_usuario AS 
SELECT usuario_id, usuario_username, usuario_puesto FROM  usuario;

CREATE VIEW view_alumno AS 
SELECT alumno_id, alumno_matricula, alumno_nombre, alumno_apellido, ec_id, ec_numero, almacen_id ,almacen_sala from alumno NATURAL JOIN ec NATURAL JOIN almacen; 