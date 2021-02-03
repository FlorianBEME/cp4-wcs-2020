SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
SET GLOBAL time_zone = '+1:00';
SET FOREIGN_KEY_CHECKS = 0;
SET GROUP_CONCAT_MAX_LEN=32768;
SET @tables = NULL;
SELECT GROUP_CONCAT('`', table_name, '`') INTO @tables
  FROM information_schema.tables
  WHERE table_schema = (SELECT DATABASE());
SELECT IFNULL(@tables,'dummy') INTO @tables;
SET @tables = CONCAT('DROP TABLE IF EXISTS ', @tables);
PREPARE stmt FROM @tables;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE `skill` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `skill_img` varchar(255) NOT NULL,
  `skill_name` varchar(255) NOT NULL,
  `isActive` boolean NOT NULL
);

CREATE TABLE `project` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `project_name` varchar(250) NOT NULL,
  `project_date` varchar(250) NOT NULL,
  `project_description` text,
  `project_url` varchar(250) NOT NULL,
  `project_img` varchar(250) NOT NULL,
  `isActive` boolean NOT NULL
);

CREATE TABLE `study` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `study_name` varchar(250) NOT NULL,
  `study_date` varchar(250) NOT NULL,
  `project_description` varchar(250) NOT NULL,
  `project_url` varchar(250),
  `project_img` varchar(250) NOT NULL,
  `isActive` boolean NOT NULL
);

CREATE TABLE `professional` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `professional_name` varchar(250) NOT NULL,
  `professional_date` varchar(250) NOT NULL,
  `professional_description` varchar(250) NOT NULL,
  `professionalt_url` varchar(250),
  `project_img` varchar(250) NOT NULL,
  `isActive` boolean NOT NULL
);


CREATE TABLE `user` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `mail_user` varchar(255) NOT NULL,
  `picture_user` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL
);

INSERT INTO user(mail_user,picture_user,user_password) VALUES ('florianbme@gmail.com','/uploads/logo_bleu.png','$2b$10$KIkqeepzuoVcaGhCDlvXveZu3yIs37PL0x/LtvhLKCBfXVKHNeBJq');




