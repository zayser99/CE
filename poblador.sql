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
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `DERECHO`), (NULL `1`), (NULL `1`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `BIOLOGIA MARINA`), (NULL `1`), (NULL `8`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `EDUCACION`), (NULL `1`), (NULL `4`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `LENGUA INGLESA`), (NULL `1`), (NULL `4`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `COMUNICACION Y GESTION CULTURAL`), (NULL `1`), (NULL `4`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA QUIMICA`), (NULL `1`), (NULL `5`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA PETROLERA`), (NULL `1`), (NULL `5`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA GEOLOGICA`), (NULL `1`), (NULL `5`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA EN SISTEMA COMPUTACIONALES`), (NULL `1`), (NULL `2`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `DISEÑO MULTIMEDIA`), (NULL `1`), (NULL `2`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `TECNOLOGIAS DE COMPUTO Y COMUNICACIONES`), (NULL `1`), (NULL `2`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `ADMINISTRACION DE EMPRESAS`), (NULL `1`), (NULL `3`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `CONTADUIRIA`), (NULL `1`), (NULL `3`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `ADMINISTRACION TURISTICA`), (NULL `1`), (NULL `3`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `MERCADOTECNIA`), (NULL `1`), (NULL `3`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `NEGOCIOS INTERNACIONALES`), (NULL `1`), (NULL `3`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA MECATRONICA`), (NULL `1`), (NULL `7`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA CIVIL`), (NULL `1`), (NULL `7`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA MECANICA`), (NULL `1`), (NULL `7`);

INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA GEOFISICA`), (NULL `1`), (NULL `7`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `INGENIERIA EN ENERGIA`), (NULL `1`), (NULL `7`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `ARQUITECTURA SUSTENTABLE`), (NULL `1`), (NULL `7`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `MEDICINA`), (NULL `1`), (NULL `6`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `PSICOLOGIA`), (NULL `1`), (NULL `6`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `FISIOTERAPIA`), (NULL `1`), (NULL `6`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `ENFERMERIA`), (NULL `1`), (NULL `6`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `NUTRICION`), (NULL `1`), (NULL `6`);
INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES  (NULL, `EDUCACION FISICA Y DEPORTE`), (NULL `1`), (NULL `6`);

-- Poblador documentos
INSERT INTO `documentos` (`documento_id`, `documento_nombre`) VALUES (NULL, `CURP`);
INSERT INTO `documentos` (`documento_id`, `documento_nombre`) VALUES (NULL, `CERTIFICADO DE PREPARATORIA`);
INSERT INTO `documentos` (`documento_id`, `documento_nombre`) VALUES (NULL, `ACTA DE NACIMIENTO`);
INSERT INTO `documentos` (`documento_id`, `documento_nombre`) VALUES (NULL, `CERTIFICADO DE PRIMARIA`);

-- Ploblador almacen
INSERT INTO `almacen` (`almacen_id`, `almacen_sala`) VALUES (NULL, `A`);
INSERT INTO `almacen` (`almacen_id`, `almacen_sala`) VALUES (NULL, `B`);
INSERT INTO `almacen` (`almacen_id`, `almacen_sala`) VALUES (NULL, `C`);

-- Plobadores ec
INSERT INTO `ec` (`ec_id`, `ec_numero`,`almacen_id`) VALUES (NULL, `11`),(`3`);

-- Poblador alumnos
INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, `130696`), (`ALAN FRANCISCO`), (`CERVANTES PEREZ`), (`1`);

-- Poblador alumno_carrera
INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`,`generacion`) VALUES (NULL, `1`),(`2018`);

-- Ploblador documentos_alumno
INSERT INTO `documentos_alumno` (`documento_id`, `alumno_id`,`cantidad`,`estado`) VALUES (NULL, `1`), (`1`), (`1`), (`B`);

-- poblador alumno 1

INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, '050004', 'LUIS ELIAZAR', 'VELUETA CHAN', '1');
INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`, `generacion`) VALUES ('10', '4', '2006');
INSERT INTO `documentos_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES ('4', '4', '1', 'B');
INSERT INTO `documentos_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES ('6', '4', '1', 'B'), ('5', '4', '1', 'B');

-- poblador alumno 2
INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES (NULL, '050020', 'FABIOLA', 'LOPEZ MARTINEZ', '1');
INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`, `generacion`) VALUES ('17', '5', '2006');