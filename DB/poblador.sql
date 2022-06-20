-- Poblador almacen #1
INSERT INTO `almacen` (`almacen_id`, `almacen_sala`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C');

-- Poblador alumno #2

INSERT INTO `alumno` (`alumno_id`, `alumno_matricula`, `alumno_nombre`, `alumno_apellido`, `ec_id`) VALUES
(1, '130696', 'ALAN FRANCISCO', 'CERVANTES PEREZ', 1),
(2, '050004', 'LUIS ELIAZAR', 'VELUETA CHAN', 1),
(3, '050020', 'FABIOLA', 'LOPEZ MARTINEZ', 1),
(4, '050022', 'DANIELA', 'TELLEZ-SILL SANTILLAN', 1),
(5, '050028', 'JORGUE MIGUEL', 'TRUJILLO CRISOSTOMO', 1),
(6, '050031', 'JOSE DEL JESUS', 'DE LA CRUZ HERNANDEZ', 1);

-- Poblador carrera #3

INSERT INTO `carrera` (`carrera_id`, `carrera_nombre`, `tipoca_id`, `facultad_id`) VALUES
(1, 'CRIMINOLOGIA Y CRIMINALISTICA', 1, 1),
(2, 'DERECHO', 1, 1),
(3, 'BIOLOGIA MARINA', 1, 8),
(4, 'EDUCACION', 1, 5),
(5, 'LENGUA INGLESA', 1, 5),
(6, 'COMUNICACION Y GESTION CULTURAL', 1, 5),
(7, 'INGENIERIA QUIMICA', 1, 6),
(8, 'INGENIERIA PETROLERA', 1, 6),
(9, 'INGENIERIA GEOLOGICA', 1, 6),
(10, 'INGENIERIA EN SISTEMA COMPUTACIONALES', 1, 4),
(11, 'DISEÑO MULTIMEDIA', 1, 4),
(12, 'TECNOLOGIAS DE COMPUTO Y COMUNICACIONES', 1, 4),
(13, 'ADMINISTRACION DE EMPRESAS', 1, 3),
(14, 'CONTADUIRIA', 1, 3),
(15, 'ADMINISTRACION TURISTICA', 1, 3),
(16, 'MERCADOTECNIA', 1, 3),
(17, 'NEGOCIOS INTERNACIONALES', 1, 3),
(18, 'INGENIERIA MECATRONICA', 1, 7),
(19, 'INGENIERIA CIVIL', 1, 7),
(20, 'INGENIERIA MECANICA', 1, 7),
(21, 'INGENIERIA GEOFISICA', 1, 7),
(22, 'INGENIERIA EN ENERGIA', 1, 7),
(23, 'ARQUITECTURA SUSTENTABLE', 1, 7),
(24, 'MEDICINA', 1, 2),
(25, 'PSICOLOGIA', 1, 2),
(26, 'FISIOTERAPIA', 1, 2),
(27, 'ENFERMERIA', 1, 2),
(28, 'NUTRICION', 1, 2),
(29, 'EDUCACION FISICA Y DEPORTE', 1, 2),
(30, 'CAMPUS II', 3, 9),
(31, 'CAMPUS SABANCUY', 3, 9);

-- poblador carrera_alumno #4

INSERT INTO `carrera_alumno` (`carrera_id`, `alumno_id`, `generacion`) VALUES
(10, 1, 2018),
(15, 6, 2005),
(17, 3, 2006),
(30, 1, 2013),
(30, 4, 2005),
(30, 5, 2005);

-- poblador documento #5

INSERT INTO `documento` (`documento_id`, `documento_nombre`) VALUES
(1, 'CURP'),
(2, 'CERTIFICADO DE PREPARATORIA'),
(3, 'ACTA DE NACIMIENTO'),
(4, 'CERTIFICADO DE PRIMARIA');

-- poblador documento_alumnos #6

INSERT INTO `documento_alumno` (`documento_id`, `alumno_id`, `cantidad`, `estado`) VALUES
(1, 5, 1, 'B'),
(2, 4, 1, 'B'),
(2, 5, 1, 'B'),
(2, 6, 1, 'B'),
(3, 3, 1, 'B'),
(4, 2, 1, 'B');

--poblador ec #7

INSERT INTO `ec` (`ec_id`, `ec_numero`, `almacen_id`) VALUES
(1, '11', 3);

-- poblador facultad #8

INSERT INTO `facultad` (`facultad_id`, `facultad_nombre`) VALUES
(1, 'DERECHO'),
(2, 'MEDICINA'),
(3, 'CIENCIAS ECONOMICAS ADMINISTRATIVAS'),
(4, 'CIENCIAS DE LA INFORMACION'),
(5, 'CIENCIAS EDUCATIVAS'),
(6, 'QUIMICA'),
(7, 'INGENIERIA'),
(8, 'CIENCIAS NATURALES EXACTAS'),
(9, 'PREPARATORIA');


-- poblador tipocarrera #9

INSERT INTO `tipocarrera` (`tipoca_id`, `tipoca_nombre`) VALUES
(1, 'LICENCIATURA'),
(2, 'MAESTRIA '),
(3, 'BACHILLERATO');




