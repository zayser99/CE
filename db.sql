CREATE TABLE IF NOT EXISTS almacen (
  `almacen_id` INT NOT NULL AUTO_INCREMENT,
  `almacen_sala` VARCHAR(50) NULL,
  PRIMARY KEY (`almacen_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ec` (
  `ec_id` INT NULL AUTO_INCREMENT,
  `ec_numero` VARCHAR(45) NULL,
  `almacen_id` INT ,
  PRIMARY KEY (`ec_id`),
    FOREIGN KEY (`almacen_id`)
    REFERENCES `almacen` (`almacen_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS alumno (
  `alumno_id` INT NOT NULL AUTO_INCREMENT,
  `alumno_matricula` INT(6) NULL,
  `alumno_nombre` VARCHAR(50) NULL,
  `alumno_apellido` VARCHAR(50) NULL,
  `ec_id` INT,
  PRIMARY KEY (`alumno_id`),
    FOREIGN KEY (`ec_id`)
    REFERENCES `ec` (`ec_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `documentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS documentos (
  `documento_id` INT NOT NULL AUTO_INCREMENT,
  `documento_nombre` VARCHAR(100) NULL,
  PRIMARY KEY (`documento_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tipocarrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS tipocarrera (
  `tipoca_id` INT NOT NULL AUTO_INCREMENT,
  `tipoca_nombre` VARCHAR(50) NULL,
  PRIMARY KEY (`tipoca_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `facultad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS facultad (
  `facultad_id` INT NOT NULL AUTO_INCREMENT,
  `facultad_nombre` VARCHAR(70) NULL,
  PRIMARY KEY (`facultad_id`))
ENGINE = FEDERATED;


-- -----------------------------------------------------
-- Table `carrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS carrera (
  `carrera_id` INT NOT NULL AUTO_INCREMENT,
  `carrera_nombre` VARCHAR(100) NULL,
  `tipoca_id` INT ,
  `facultad_id` INT ,
  PRIMARY KEY (`carrera_id`),
    FOREIGN KEY (`tipoca_id`)
    REFERENCES `tipocarrera` (`tipoca_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
    FOREIGN KEY (`facultad_id`)
    REFERENCES `facultad` (`facultad_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `carrera_alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS carrera_alumno (
  `carrera_id` INT NOT NULL,
  `alumno_id` INT NOT NULL,
  `generacion` INT NULL,
  PRIMARY KEY (`carrera_id`, `alumno_id`),
    FOREIGN KEY (`carrera_id`)
    REFERENCES `carrera` (`carrera_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (`alumno_id`)
    REFERENCES `alumno` (`alumno_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `documentos_alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS documentos_alumno (
  `documento_id` INT NOT NULL,
  `alumno_id` INT NOT NULL,
  `cantidad` INT NULL,
  `estado` CHAR(1) NULL,
  PRIMARY KEY (`documento_id`, `alumno_id`),
    FOREIGN KEY (`documento_id`)
    REFERENCES `documentos` (`documento_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (`alumno_id`)
    REFERENCES `alumno` (`alumno_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS usuarios (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `usuario_username` VARCHAR(50) NULL,
  `usuario_password` TEXT NULL,
  `usuario_puesto` CHAR(1) NULL,
  PRIMARY KEY (`usuario_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `modificacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS modificacion (
  `modi_id` INT NOT NULL AUTO_INCREMENT,
  `modi_matricula` INT(6) NULL,
  `modi_nombre` VARCHAR(50) NULL,
  `modi_apellido` VARCHAR(50) NULL,
  `modi_fecha` DATETIME NULL,
  `modi_detalle` VARCHAR(100) NULL,
  `usuario_id` INT,
  `alumno_id` INT,
  PRIMARY KEY (`modi_id`),
    FOREIGN KEY (`usuario_id`)
    REFERENCES `usuarios` (`usuario_id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL,
    FOREIGN KEY (`alumno_id`)
    REFERENCES `alumno` (`alumno_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;
