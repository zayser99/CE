INSERT INTO `tipocarrera` (`tipoca_id`, `tipoca_nombre`) VALUES (NULL, 'LICENCIATURA'), (NULL, 'MAESTRIA '), (NULL, 'BACHILLERATO');

-- Poblador facultad
INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES  (NULL, 'DERECHO');
INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES  (NULL, 'MEDICINA');
INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES  (NULL, 'CIENCIAS ECONOMICAS ADMINISTRATIVAS');
INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES  (NULL, 'CIENCIAS DE LA INFORMACION');
INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES  (NULL, 'CIENCIAS EDUCATIVAS');
INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES  (NULL, 'QUIMICA');
INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES  (NULL, 'INGENIERIA');
INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES  (NULL, 'CIENCIAS NATURALES EXACTAS');


-- poblador carrera

INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'CRIMINOLOGIA Y CRIMINALISTICA','1','1');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'DERECHO','1','1');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'BIOLOGIA MARINA','1','8');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'EDUCACION','1','4');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'LENGUA INGLESA','1','4');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'COMUNICACION Y GESTION CULTURAL','1','4');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA QUIMICA','1','5');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA PETROLERA','1','5');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA GEOLOGICA','1','5');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA EN SISTEMA COMPUTACIONALES','1','2');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'DISEÑO MULTIMEDIA','1','2');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'TECNOLOGIAS DE COMPUTO Y COMUNICACIONES','1','2');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'ADMINISTRACION DE EMPRESAS','1','3');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'CONTADUIRIA','1','3');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'ADMINISTRACION TURISTICA','1','3');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'MERCADOTECNIA','1','3');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'NEGOCIOS INTERNACIONALES','1','3');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA MECATRONICA','1','7');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA CIVIL','1','7');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA MECANICA','1','7');

INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA GEOFISICA','1','7');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'INGENIERIA EN ENERGIA','1','7');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'ARQUITECTURA SUSTENTABLE','1','7');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'MEDICINA','1','6');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'PSICOLOGIA','1','6');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'FISIOTERAPIA','1','6');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'ENFERMERIA','1','6');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'NUTRICION','1','6');
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, 'EDUCACION FISICA Y DEPORTE','1','6');

-- Poblador documento
INSERT INTO `documento` (`documento_id`, `documento_nombre`) VALUES (NULL, 'CURP');
INSERT INTO `documento` (`documento_id`, `documento_nombre`) VALUES (NULL, 'CERTIFICADO DE PREPARATORIA');
INSERT INTO `documento` (`documento_id`, `documento_nombre`) VALUES (NULL, 'ACTA DE NACIMIENTO');
INSERT INTO `documento` (`documento_id`, `documento_nombre`) VALUES (NULL, 'CERTIFICADO DE PRIMARIA');

-- Ploblador almacen
INSERT INTO `almacen` (`almacen_id`, `almacen_sala`) VALUES (NULL, 'A');
INSERT INTO `almacen` (`almacen_id`, `almacen_sala`) VALUES (NULL, 'B');
INSERT INTO `almacen` (`almacen_id`, `almacen_sala`) VALUES (NULL, 'C');

-- Plobadores ec
INSERT INTO `ec` (`ec_id`, `ec_numero`,`almacen_id`) VALUES (NULL, '11','3');

-- Poblador alumnos
INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, '130696','ALAN FRANCISCO','CERVANTES PEREZ', '1');

-- poblador alumno 1

INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, '050004', 'LUIS ELIAZAR', 'VELUETA CHAN', '1');
INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`, `generacion`) VALUES ('10', '4', '2006');
INSERT INTO `documento_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES ('4', '4', '1', 'B');
INSERT INTO `documento_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES ('6', '4', '1', 'B'), ('5', '4', '1', 'B');

-- poblador alumno 2

INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, '050020', 'FABIOLA', 'LOPEZ MARTINEZ', '1');
INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`, `generacion`) VALUES ('17', '3', '2006');
INSERT INTO `documento_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES ('3', '3', '1', 'B');

-- poblador alumno 3

INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, '050022', 'DANIELA', 'TELLEZ-SILL SANTILLAN', '1');
INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`, `generacion`) VALUES ('30', '4', '2005');
INSERT INTO `documento_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES ('2', '4', '1', 'B');

-- poblador alumno 4

INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, '050028', 'JORGUE MIGUEL', 'TRUJILLO CRISOSTOMO', '1');
INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`, `generacion`) VALUES ('30', '5', '2005');
INSERT INTO `documento_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES ('2', '5', '1', 'B'), ('1', '5', '1', 'B');

-- poblador alumno 5

INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, '050031', 'JOSE DEL JESUS', 'DE LA CRUZ HERNANDEZ', '1');
INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`, `generacion`) VALUES ('15', '6', '2005');
INSERT INTO `documento_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES ('2', '6', '1', 'B');



-- -- Poblador alumno_carrera
-- INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`,`generacion`) VALUES (NULL, '1','2018');

-- -- Ploblador documento_alumno
-- INSERT INTO `documento_alumno` (`documento_id`, `alumno_id`,`cantidad`,`estado`) VALUES (NULL, '1', '1', '1','B');
