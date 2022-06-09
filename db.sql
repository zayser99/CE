CREATE TABLE IF NOT EXISTS almacen (
  `almacen_id` INT NOT NULL AUTO_INCREMENT,
  `almacen_sala` VARCHAR(50) NULL,
  PRIMARY KEY (`almacen_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ec`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ec (
  `ec_id` INT NULL AUTO_INCREMENT,
  `ec_numero` VARCHAR(45) NULL,
  `almacen_id` INT NOT NULL,
  PRIMARY KEY (`ec_id`),
  INDEX `fk_ec_almacen1_idx` (`almacen_id` ASC) VISIBLE,
  CONSTRAINT `fk_ec_almacen1`
    FOREIGN KEY (`almacen_id`)
    REFERENCES `mydb`.`almacen` (`almacen_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS alumno (
  `alumno_id` INT NOT NULL AUTO_INCREMENT,
  `alumno_matricula` INT(6) NULL,
  `alumno_nombre` VARCHAR(50) NULL,
  `alumno_apellido` VARCHAR(50) NULL,
  `ec_id` INT NOT NULL,
  PRIMARY KEY (`alumno_id`),
  INDEX `fk_alumno_ec1_idx` (`ec_id` ASC) VISIBLE,
  CONSTRAINT `fk_alumno_ec1`
    FOREIGN KEY (`ec_id`)
    REFERENCES `mydb`.`ec` (`ec_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Documentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Documentos (
  `ocumentos` INT NOT NULL,
  PRIMARY KEY (`ocumentos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`documentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS documentos (
  `documento_id` INT NOT NULL AUTO_INCREMENT,
  `documento_nombre` VARCHAR(100) NULL,
  PRIMARY KEY (`documento_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tipocarrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS tipocarrera (
  `tipoca_id` INT NOT NULL AUTO_INCREMENT,
  `tipoca_nombre` VARCHAR(50) NULL,
  PRIMARY KEY (`tipoca_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`facultad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS facultad (
  `facultad_id` INT NOT NULL AUTO_INCREMENT,
  `facultad_nombre` VARCHAR(70) NULL,
  PRIMARY KEY (`facultad_id`))
ENGINE = FEDERATED;


-- -----------------------------------------------------
-- Table `mydb`.`carrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS carrera (
  `carrera_id` INT NOT NULL AUTO_INCREMENT,
  `carrera_nombre` VARCHAR(100) NULL,
  `tipoca_id` INT NOT NULL,
  `facultad_id` INT NOT NULL,
  PRIMARY KEY (`carrera_id`),
  INDEX `fk_carrera_tipocarrera1_idx` (`tipoca_id` ASC) VISIBLE,
  INDEX `fk_carrera_facultad1_idx` (`facultad_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrera_tipocarrera1`
    FOREIGN KEY (`tipoca_id`)
    REFERENCES `mydb`.`tipocarrera` (`tipoca_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrera_facultad1`
    FOREIGN KEY (`facultad_id`)
    REFERENCES `mydb`.`facultad` (`facultad_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`carrera_alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS carrera_alumno (
  `carrera_id` INT NOT NULL,
  `alumno_id` INT NOT NULL,
  `generacion` INT NULL,
  PRIMARY KEY (`carrera_id`, `alumno_id`),
  INDEX `fk_carrera_has_alumno_alumno1_idx` (`alumno_id` ASC) VISIBLE,
  INDEX `fk_carrera_has_alumno_carrera_idx` (`carrera_id` ASC) VISIBLE,
  CONSTRAINT `fk_carrera_has_alumno_carrera`
    FOREIGN KEY (`carrera_id`)
    REFERENCES `mydb`.`carrera` (`carrera_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrera_has_alumno_alumno1`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `mydb`.`alumno` (`alumno_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`documentos_alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS documentos_alumno (
  `documento_id` INT NOT NULL,
  `alumno_id` INT NOT NULL,
  `cantidad` INT NULL,
  `estado` CHAR(1) NULL,
  PRIMARY KEY (`documento_id`, `alumno_id`),
  INDEX `fk_documentos_has_alumno_alumno1_idx` (`alumno_id` ASC) VISIBLE,
  INDEX `fk_documentos_has_alumno_documentos1_idx` (`documento_id` ASC) VISIBLE,
  CONSTRAINT `fk_documentos_has_alumno_documentos1`
    FOREIGN KEY (`documento_id`)
    REFERENCES `mydb`.`documentos` (`documento_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_documentos_has_alumno_alumno1`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `mydb`.`alumno` (`alumno_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS usuarios (
  `usuario_id` INT NOT NULL AUTO_INCREMENT,
  `usuario_username` VARCHAR(50) NULL,
  `usuario_password` TEXT NULL,
  `usuario_puesto` CHAR(1) NULL,
  PRIMARY KEY (`usuario_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`modificacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS modificacion (
  `modi_id` INT NOT NULL AUTO_INCREMENT,
  `modi_matricula` INT(6) NULL,
  `modi_nombre` VARCHAR(50) NULL,
  `modi_apellido` VARCHAR(50) NULL,
  `modi_fecha` DATETIME NULL,
  `modi_detalle` VARCHAR(100) NULL,
  `usuario_id` INT NOT NULL,
  `alumno_id` INT NOT NULL,
  PRIMARY KEY (`modi_id`),
  INDEX `fk_modificacion_usuarios1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_modificacion_alumno1_idx` (`alumno_id` ASC) VISIBLE,
  CONSTRAINT `fk_modificacion_usuarios1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `mydb`.`usuarios` (`usuario_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_modificacion_alumno1`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `mydb`.`alumno` (`alumno_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
