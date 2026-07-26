CREATE DATABASE  IF NOT EXISTS `ecofinance_sl` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecofinance_sl`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: ecofinance_sl
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ai_reports`
--

DROP TABLE IF EXISTS `ai_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ai_reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL,
  `business_id` int NOT NULL,
  `esg_id` int NOT NULL,
  `model` varchar(100) DEFAULT NULL,
  `prompt` text,
  `report` text,
  `prompt_tokens` int DEFAULT NULL,
  `completion_tokens` int DEFAULT NULL,
  `total_tokens` int DEFAULT NULL,
  `cost` decimal(12,6) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `business_id` (`business_id`),
  KEY `company_id` (`company_id`),
  KEY `created_by` (`created_by`),
  KEY `esg_id` (`esg_id`),
  CONSTRAINT `ai_reports_ibfk_1` FOREIGN KEY (`business_id`) REFERENCES `business_inputs` (`id`),
  CONSTRAINT `ai_reports_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  CONSTRAINT `ai_reports_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  CONSTRAINT `ai_reports_ibfk_4` FOREIGN KEY (`esg_id`) REFERENCES `esg_scores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ai_reports`
--

LOCK TABLES `ai_reports` WRITE;
/*!40000 ALTER TABLE `ai_reports` DISABLE KEYS */;
INSERT INTO `ai_reports` VALUES (1,1,8,2,'google/gemini-3.6-flash','\nGenerate a comprehensive sustainability report using the supplied business information.\n\nThe report must include the following sections:\n\n# Executive Summary\n\n# Environmental Performance\n\n# Social Performance\n\n# Governance Performance\n\n# Carbon Emissions Analysis\n\n# Strengths\n\n# Areas for Improvement\n\n# Recommendations\n\n# Conclusion\n\nWrite approximately 800–1200 words.\n\nUse Markdown formatting.\n\nDo not fabricate any values.\n\n--------------------------------------------------\n\n\n    ==============================\n    Company Information\n    ==============================\n\n    Company Name:\n    ABC Holdings (Pvt) Ltd\n\n    Business Sector:\n    Information Technology\n\n    Reporting Year:\n    2026\n\n    Reporting Month:\n    7\n    \n\n    ==============================\n    Business Data\n    ==============================\n\n    Grid Electricity:\n    0.0 kWh\n\n    Renewable Electricity:\n    0.0 kWh\n\n    Diesel:\n    0.0 Liters\n\n    Petrol:\n    0.0 Liters\n\n    LPG:\n    0.0 kg\n\n    Natural Gas:\n    0.0 m³\n\n    Business Travel:\n    0.0 km\n\n    Employee Travel:\n    0.0 km\n\n    Freight Transport:\n    0.0 km\n\n    General Waste:\n    0.0 kg\n\n    Recycled Waste:\n    0.0 kg\n\n    Hazardous Waste:\n    0.0 kg\n    \n\n    ==============================\n    Carbon Emissions\n    ==============================\n\n    Scope 1:\n    0.00 kgCO₂e\n\n    Scope 2:\n    0.00 kgCO₂e\n\n    Scope 3:\n    0.00 kgCO₂e\n\n    Total:\n    0.00 kgCO₂e\n    \n\n    ==============================\n    ESG Assessment\n    ==============================\n\n    Environmental Score:\n    84.0\n\n    Social Score:\n    77.1\n\n    Governance Score:\n    100.0\n\n    Overall ESG Score:\n    87.03\n    \n','# Executive Summary\n\nThis comprehensive Sustainability Report presents an evaluation of the Environmental, Social, and Governance (ESG) performance and carbon footprint for **ABC Holdings (Pvt) Ltd** for the reporting period of **July 2026** (Month 7, Year 2026). Operating within the **Information Technology** sector, the company’s non-financial performance and environmental',518,1996,2514,0.015747,'generated',1,'2026-07-26 08:22:34'),(2,1,8,2,'google/gemini-3.6-flash','\nGenerate a comprehensive sustainability report using the supplied business information.\n\nThe report must include the following sections:\n\n# Executive Summary\n\n# Environmental Performance\n\n# Social Performance\n\n# Governance Performance\n\n# Carbon Emissions Analysis\n\n# Strengths\n\n# Areas for Improvement\n\n# Recommendations\n\n# Conclusion\n\nWrite approximately 800–1200 words.\n\nUse Markdown formatting.\n\nDo not fabricate any values.\n\n--------------------------------------------------\n\n\n    ==============================\n    Company Information\n    ==============================\n\n    Company Name:\n    ABC Holdings (Pvt) Ltd\n\n    Business Sector:\n    Information Technology\n\n    Reporting Year:\n    2026\n\n    Reporting Month:\n    7\n    \n\n    ==============================\n    Business Data\n    ==============================\n\n    Grid Electricity:\n    0.0 kWh\n\n    Renewable Electricity:\n    0.0 kWh\n\n    Diesel:\n    0.0 Liters\n\n    Petrol:\n    0.0 Liters\n\n    LPG:\n    0.0 kg\n\n    Natural Gas:\n    0.0 m³\n\n    Business Travel:\n    0.0 km\n\n    Employee Travel:\n    0.0 km\n\n    Freight Transport:\n    0.0 km\n\n    General Waste:\n    0.0 kg\n\n    Recycled Waste:\n    0.0 kg\n\n    Hazardous Waste:\n    0.0 kg\n    \n\n    ==============================\n    Carbon Emissions\n    ==============================\n\n    Scope 1:\n    0.00 kgCO₂e\n\n    Scope 2:\n    0.00 kgCO₂e\n\n    Scope 3:\n    0.00 kgCO₂e\n\n    Total:\n    0.00 kgCO₂e\n    \n\n    ==============================\n    ESG Assessment\n    ==============================\n\n    Environmental Score:\n    84.0\n\n    Social Score:\n    77.1\n\n    Governance Score:\n    100.0\n\n    Overall ESG Score:\n    87.03\n    \n','# Executive Summary\n\nThis Comprehensive Sustainability Report provides a structured assessment of the Environmental, Social, and Governance (ESG) performance for **ABC Holdings (Pvt) Ltd** for the reporting period of July 2026 (Month 7, Year 2026). Operating within the **Information Technology** sector, the company’s operational profile and sustainability metrics have been evaluated against',518,1996,2514,0.015747,'generated',1,'2026-07-26 08:48:21'),(3,1,8,2,'google/gemini-3.6-flash','\nGenerate a comprehensive sustainability report using the supplied business information.\n\nThe report must include the following sections:\n\n# Executive Summary\n\n# Environmental Performance\n\n# Social Performance\n\n# Governance Performance\n\n# Carbon Emissions Analysis\n\n# Strengths\n\n# Areas for Improvement\n\n# Recommendations\n\n# Conclusion\n\nWrite approximately 800–1200 words.\n\nUse Markdown formatting.\n\nDo not fabricate any values.\n\n--------------------------------------------------\n\n\n    ==============================\n    Company Information\n    ==============================\n\n    Company Name:\n    ABC Holdings (Pvt) Ltd\n\n    Business Sector:\n    Information Technology\n\n    Reporting Year:\n    2026\n\n    Reporting Month:\n    7\n    \n\n    ==============================\n    Business Data\n    ==============================\n\n    Grid Electricity:\n    0.0 kWh\n\n    Renewable Electricity:\n    0.0 kWh\n\n    Diesel:\n    0.0 Liters\n\n    Petrol:\n    0.0 Liters\n\n    LPG:\n    0.0 kg\n\n    Natural Gas:\n    0.0 m³\n\n    Business Travel:\n    0.0 km\n\n    Employee Travel:\n    0.0 km\n\n    Freight Transport:\n    0.0 km\n\n    General Waste:\n    0.0 kg\n\n    Recycled Waste:\n    0.0 kg\n\n    Hazardous Waste:\n    0.0 kg\n    \n\n    ==============================\n    Carbon Emissions\n    ==============================\n\n    Scope 1:\n    0.00 kgCO₂e\n\n    Scope 2:\n    0.00 kgCO₂e\n\n    Scope 3:\n    0.00 kgCO₂e\n\n    Total:\n    0.00 kgCO₂e\n    \n\n    ==============================\n    ESG Assessment\n    ==============================\n\n    Environmental Score:\n    84.0\n\n    Social Score:\n    77.1\n\n    Governance Score:\n    100.0\n\n    Overall ESG Score:\n    87.03\n    \n','# Executive Summary\n\nThis corporate sustainability report provides an evaluation of the Environmental, Social, and Governance (ESG) performance and carbon accounting metrics for **ABC Holdings (Pvt) Ltd** for the reporting period of July 2026 (Month 7, Year 2026). As an enterprise operating within the Information Technology sector, ABC Holdings (Pvt',518,1996,2514,0.015747,'generated',1,'2026-07-26 08:50:28'),(4,1,8,2,'google/gemini-3.6-flash','\nGenerate a comprehensive sustainability report using the supplied business information.\n\nThe report must include the following sections:\n\n# Executive Summary\n\n# Environmental Performance\n\n# Social Performance\n\n# Governance Performance\n\n# Carbon Emissions Analysis\n\n# Strengths\n\n# Areas for Improvement\n\n# Recommendations\n\n# Conclusion\n\nWrite approximately 800–1200 words.\n\nUse Markdown formatting.\n\nDo not fabricate any values.\n\n--------------------------------------------------\n\n\n    ==============================\n    Company Information\n    ==============================\n\n    Company Name:\n    ABC Holdings (Pvt) Ltd\n\n    Business Sector:\n    Information Technology\n\n    Reporting Year:\n    2026\n\n    Reporting Month:\n    7\n    \n\n    ==============================\n    Business Data\n    ==============================\n\n    Grid Electricity:\n    0.0 kWh\n\n    Renewable Electricity:\n    0.0 kWh\n\n    Diesel:\n    0.0 Liters\n\n    Petrol:\n    0.0 Liters\n\n    LPG:\n    0.0 kg\n\n    Natural Gas:\n    0.0 m³\n\n    Business Travel:\n    0.0 km\n\n    Employee Travel:\n    0.0 km\n\n    Freight Transport:\n    0.0 km\n\n    General Waste:\n    0.0 kg\n\n    Recycled Waste:\n    0.0 kg\n\n    Hazardous Waste:\n    0.0 kg\n    \n\n    ==============================\n    Carbon Emissions\n    ==============================\n\n    Scope 1:\n    0.00 kgCO₂e\n\n    Scope 2:\n    0.00 kgCO₂e\n\n    Scope 3:\n    0.00 kgCO₂e\n\n    Total:\n    0.00 kgCO₂e\n    \n\n    ==============================\n    ESG Assessment\n    ==============================\n\n    Environmental Score:\n    84.0\n\n    Social Score:\n    77.1\n\n    Governance Score:\n    100.0\n\n    Overall ESG Score:\n    87.03\n    \n','# Executive Summary\n\nABC Holdings (Pvt) Ltd, operating within the Information Technology sector, presents its sustainability performance report for the reporting period of July 2026 (Month 7, 2026). This report provides an evaluation of the company’s Environmental, Social, and Governance (ESG) performance, carbon emissions baseline, and operational impact tracking.\n\nFor the designated reporting period, ABC Holdings (Pvt) Ltd achieved an **Overall ESG Score of 87.03**, representing a strong performance benchmark within the IT sector. This performance is underpinned by scores across the three core pillars:\n* **Environmental Score:** 84.0\n* **Social Score:** 77.1\n* **Governance Score:** 100.0\n\nThe organization’s carbon accounting inventory records a total footprint of **0.00 kgCO₂e**, spanning Scope 1, Scope 2, and Scope 3 greenhouse gas emissions. All activity metrics—including electricity usage, fuel consumption, business',518,1996,2514,0.015747,'generated',1,'2026-07-26 08:53:26'),(5,1,8,2,'google/gemini-3.6-flash','\nGenerate a comprehensive sustainability report using the supplied business information.\n\nThe report must include the following sections:\n\n# Executive Summary\n\n# Environmental Performance\n\n# Social Performance\n\n# Governance Performance\n\n# Carbon Emissions Analysis\n\n# Strengths\n\n# Areas for Improvement\n\n# Recommendations\n\n# Conclusion\n\nWrite approximately 800–1200 words.\n\nUse Markdown formatting.\n\nDo not fabricate any values.\n\n--------------------------------------------------\n\n\n    ==============================\n    Company Information\n    ==============================\n\n    Company Name:\n    ABC Holdings (Pvt) Ltd\n\n    Business Sector:\n    Information Technology\n\n    Reporting Year:\n    2026\n\n    Reporting Month:\n    7\n    \n\n    ==============================\n    Business Data\n    ==============================\n\n    Grid Electricity:\n    0.0 kWh\n\n    Renewable Electricity:\n    0.0 kWh\n\n    Diesel:\n    0.0 Liters\n\n    Petrol:\n    0.0 Liters\n\n    LPG:\n    0.0 kg\n\n    Natural Gas:\n    0.0 m³\n\n    Business Travel:\n    0.0 km\n\n    Employee Travel:\n    0.0 km\n\n    Freight Transport:\n    0.0 km\n\n    General Waste:\n    0.0 kg\n\n    Recycled Waste:\n    0.0 kg\n\n    Hazardous Waste:\n    0.0 kg\n    \n\n    ==============================\n    Carbon Emissions\n    ==============================\n\n    Scope 1:\n    0.00 kgCO₂e\n\n    Scope 2:\n    0.00 kgCO₂e\n\n    Scope 3:\n    0.00 kgCO₂e\n\n    Total:\n    0.00 kgCO₂e\n    \n\n    ==============================\n    ESG Assessment\n    ==============================\n\n    Environmental Score:\n    84.0\n\n    Social Score:\n    77.1\n\n    Governance Score:\n    100.0\n\n    Overall ESG Score:\n    87.03\n    \n','# Executive Summary\n\nThis comprehensive Sustainability Report presents an evaluation of the Environmental, Social, and Governance (ESG) performance for **ABC Holdings (Pvt) Ltd** for the reporting period of July 2026. Operating within the Information Technology sector, ABC Holdings (Pvt) Ltd demonstrates a highly commendable overall ESG posture, achieving an **Overall ESG Score of 87.03',518,1996,2514,0.015747,'generated',1,'2026-07-26 08:56:34');
/*!40000 ALTER TABLE `ai_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES `alembic_version` WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
INSERT INTO `alembic_version` VALUES ('26a4a1342913');
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_inputs`
--

DROP TABLE IF EXISTS `business_inputs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_inputs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL,
  `reporting_year` int NOT NULL,
  `reporting_month` int NOT NULL,
  `grid_electricity_kwh` float DEFAULT NULL,
  `renewable_electricity_kwh` float DEFAULT NULL,
  `diesel_liters` float DEFAULT NULL,
  `petrol_liters` float DEFAULT NULL,
  `lpg_kg` float DEFAULT NULL,
  `natural_gas_m3` float DEFAULT NULL,
  `business_travel_km` float DEFAULT NULL,
  `employee_travel_km` float DEFAULT NULL,
  `freight_transport_km` float DEFAULT NULL,
  `general_waste_kg` float DEFAULT NULL,
  `recycled_waste_kg` float DEFAULT NULL,
  `hazardous_waste_kg` float DEFAULT NULL,
  `total_carbon` float DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `business_inputs_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_inputs`
--

LOCK TABLES `business_inputs` WRITE;
/*!40000 ALTER TABLE `business_inputs` DISABLE KEYS */;
INSERT INTO `business_inputs` VALUES (1,1,2026,7,1200,300,150,50,20,0,800,1200,500,400,100,20,0,'2026-07-25 23:23:09'),(2,1,2026,7,1200,300,150,50,20,0,800,1200,500,400,100,20,0,'2026-07-25 23:42:29'),(3,1,2026,7,1200,300,150,50,20,0,800,1200,500,400,100,20,0,'2026-07-25 23:44:51'),(4,1,2026,7,1200,300,150,50,20,0,800,1200,500,400,100,20,0,'2026-07-25 23:46:26'),(5,1,2026,7,1200,300,150,50,20,0,800,1200,500,400,100,20,0,'2026-07-25 23:49:18'),(6,1,2026,7,1200,300,150,50,20,0,800,1200,500,400,100,20,0,'2026-07-26 00:01:49'),(7,1,2026,7,1200,300,150,50,20,0,800,1200,500,400,100,20,1723.7,'2026-07-26 08:54:16'),(8,1,2026,7,0,0,0,0,0,0,0,0,0,0,0,0,0,'2026-07-26 10:48:59');
/*!40000 ALTER TABLE `business_inputs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carbon_records`
--

DROP TABLE IF EXISTS `carbon_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carbon_records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `business_input_id` int NOT NULL,
  `company_id` int NOT NULL,
  `scope1` float NOT NULL,
  `scope2` float NOT NULL,
  `scope3` float NOT NULL,
  `total_emission` float NOT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `business_input_id` (`business_input_id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `carbon_records_ibfk_1` FOREIGN KEY (`business_input_id`) REFERENCES `business_inputs` (`id`),
  CONSTRAINT `carbon_records_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carbon_records`
--

LOCK TABLES `carbon_records` WRITE;
/*!40000 ALTER TABLE `carbon_records` DISABLE KEYS */;
INSERT INTO `carbon_records` VALUES (1,7,1,547.7,516,660,1723.7,'2026-07-26 08:54:16'),(2,8,1,0,0,0,0,'2026-07-26 10:48:59');
/*!40000 ALTER TABLE `carbon_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `business_sector` varchar(150) DEFAULT NULL,
  `registration_no` varchar(100) DEFAULT NULL,
  `address` text,
  `district` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `contact_no` varchar(20) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,1,'ABC Holdings (Pvt) Ltd','Information Technology','PV98765','123, Galle Road, Colombo 03','Colombo','Western Province','0771234567','https://www.abcholdings.lk','2026-07-25 23:20:29');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `esg_inputs`
--

DROP TABLE IF EXISTS `esg_inputs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `esg_inputs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL,
  `renewable_energy` float DEFAULT NULL,
  `water_consumption` float DEFAULT NULL,
  `recycling_rate` float DEFAULT NULL,
  `environmental_policy` tinyint(1) DEFAULT NULL,
  `employee_satisfaction` float DEFAULT NULL,
  `training_hours` float DEFAULT NULL,
  `gender_diversity` float DEFAULT NULL,
  `community_projects` tinyint(1) DEFAULT NULL,
  `board_meetings` int DEFAULT NULL,
  `ethics_policy` tinyint(1) DEFAULT NULL,
  `compliance` tinyint(1) DEFAULT NULL,
  `risk_management` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `esg_inputs_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `esg_inputs`
--

LOCK TABLES `esg_inputs` WRITE;
/*!40000 ALTER TABLE `esg_inputs` DISABLE KEYS */;
INSERT INTO `esg_inputs` VALUES (1,1,40,1200,60,1,88,15,45,1,8,1,1,1,'2026-07-26 08:54:38'),(2,1,30,500,45,1,85,24,42,1,6,1,1,1,'2026-07-26 08:56:52');
/*!40000 ALTER TABLE `esg_inputs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `esg_scores`
--

DROP TABLE IF EXISTS `esg_scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `esg_scores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL,
  `environmental_score` float NOT NULL,
  `social_score` float NOT NULL,
  `governance_score` float NOT NULL,
  `overall_score` float NOT NULL,
  `environmental_status` varchar(50) DEFAULT NULL,
  `social_status` varchar(50) DEFAULT NULL,
  `governance_status` varchar(50) DEFAULT NULL,
  `overall_status` varchar(50) DEFAULT NULL,
  `environmental_remark` text,
  `social_remark` text,
  `governance_remark` text,
  `overall_remark` text,
  `recommendations` text,
  `created_at` datetime DEFAULT (now()),
  `esg_input_id` int NOT NULL,
  `carbon_record_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `carbon_record_id` (`carbon_record_id`),
  KEY `esg_input_id` (`esg_input_id`),
  CONSTRAINT `esg_scores_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  CONSTRAINT `esg_scores_ibfk_2` FOREIGN KEY (`carbon_record_id`) REFERENCES `carbon_records` (`id`),
  CONSTRAINT `esg_scores_ibfk_3` FOREIGN KEY (`esg_input_id`) REFERENCES `esg_inputs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `esg_scores`
--

LOCK TABLES `esg_scores` WRITE;
/*!40000 ALTER TABLE `esg_scores` DISABLE KEYS */;
INSERT INTO `esg_scores` VALUES (1,1,87,75,100,87.33,'Good','Good','Excellent','Good','Good environmental practices. Continue improving renewable energy and recycling.','Good social responsibility practices.','Strong governance and compliance practices.','Overall ESG performance is Good.','Maintain your excellent ESG performance.','2026-07-26 08:54:38',1,1),(2,1,84,77.1,100,87.03,'Good','Good','Excellent','Good','Good environmental practices. Continue improving renewable energy and recycling.','Good social responsibility practices.','Strong governance and compliance practices.','Overall ESG performance is Good.','Maintain your excellent ESG performance.','2026-07-26 08:56:52',2,1);
/*!40000 ALTER TABLE `esg_scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL,
  `report_title` varchar(200) NOT NULL,
  `report_type` varchar(100) NOT NULL,
  `report_content` text NOT NULL,
  `report_status` varchar(50) DEFAULT NULL,
  `generated_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` VALUES (1,1,'Sustainability Report','FULL_REPORT','\n==========================================================\n               ECOFINANCE SL\n        ESG SUSTAINABILITY REPORT\n==========================================================\n\nCompany Name\n------------\nABC Holdings (Pvt) Ltd\n\nBusiness Sector\n---------------\nInformation Technology\n\nReporting Period\n----------------\n7/2026\n\nGrid Electricity\n----------------\n1200.0 kWh\n\nRenewable Electricity\n---------------------\n300.0 kWh\n\nDiesel\n------\n150.0 L\n\nPetrol\n------\n50.0 L\n\nLPG\n---\n20.0 kg\n\nNatural Gas\n-----------\n0.0 m³\n\nBusiness Travel\n---------------\n800.0 km\n\nEmployee Travel\n---------------\n1200.0 km\n\nFreight Transport\n-----------------\n500.0 km\n\nGeneral Waste\n-------------\n400.0 kg\n\nRecycled Waste\n--------------\n100.0 kg\n\nHazardous Waste\n---------------\n20.0 kg\n\n\n==========================================================\nCARBON FOOTPRINT\n==========================================================\n\nScope 1 : 547.70 kg CO₂e\n\nScope 2 : 516.00 kg CO₂e\n\nScope 3 : 660.00 kg CO₂e\n\nTotal Emission : 1723.70 kg CO₂e\n\n==========================================================\nENVIRONMENTAL\n==========================================================\n\nScore : 84.0\n\nStatus : Good\n\nRemark :\nGood environmental practices. Continue improving renewable energy and recycling.\n\n\n==========================================================\nSOCIAL\n==========================================================\n\nScore : 77.1\n\nStatus : Good\n\nRemark :\nGood social responsibility practices.\n\n\n==========================================================\nGOVERNANCE\n==========================================================\n\nScore : 100.0\n\nStatus : Excellent\n\nRemark :\nStrong governance and compliance practices.\n\n\n==========================================================\nOVERALL ESG\n==========================================================\n\nOverall Score : 87.03\n\nStatus : Good\n\nRemark :\nOverall ESG performance is Good.\n\n\n==========================================================\nRECOMMENDATIONS\n==========================================================\n\nMaintain your excellent ESG performance.\n\n==========================================================\nGenerated by EcoFinance SL\nGenerated on: 2026-07-26 09:48:57\n==========================================================\n','Generated','2026-07-26 09:48:57'),(2,1,'Sustainability Report','FULL_REPORT','\n==========================================================\n               ECOFINANCE SL\n        ESG SUSTAINABILITY REPORT\n==========================================================\n\nCompany Name\n------------\nABC Holdings (Pvt) Ltd\n\nBusiness Sector\n---------------\nInformation Technology\n\nReporting Period\n----------------\n7/2026\n\nGrid Electricity\n----------------\n1200.0 kWh\n\nRenewable Electricity\n---------------------\n300.0 kWh\n\nDiesel\n------\n150.0 L\n\nPetrol\n------\n50.0 L\n\nLPG\n---\n20.0 kg\n\nNatural Gas\n-----------\n0.0 m³\n\nBusiness Travel\n---------------\n800.0 km\n\nEmployee Travel\n---------------\n1200.0 km\n\nFreight Transport\n-----------------\n500.0 km\n\nGeneral Waste\n-------------\n400.0 kg\n\nRecycled Waste\n--------------\n100.0 kg\n\nHazardous Waste\n---------------\n20.0 kg\n\n\n==========================================================\nCARBON FOOTPRINT\n==========================================================\n\nScope 1 : 547.70 kg CO₂e\n\nScope 2 : 516.00 kg CO₂e\n\nScope 3 : 660.00 kg CO₂e\n\nTotal Emission : 1723.70 kg CO₂e\n\n==========================================================\nENVIRONMENTAL\n==========================================================\n\nScore : 84.0\n\nStatus : Good\n\nRemark :\nGood environmental practices. Continue improving renewable energy and recycling.\n\n\n==========================================================\nSOCIAL\n==========================================================\n\nScore : 77.1\n\nStatus : Good\n\nRemark :\nGood social responsibility practices.\n\n\n==========================================================\nGOVERNANCE\n==========================================================\n\nScore : 100.0\n\nStatus : Excellent\n\nRemark :\nStrong governance and compliance practices.\n\n\n==========================================================\nOVERALL ESG\n==========================================================\n\nOverall Score : 87.03\n\nStatus : Good\n\nRemark :\nOverall ESG performance is Good.\n\n\n==========================================================\nRECOMMENDATIONS\n==========================================================\n\nMaintain your excellent ESG performance.\n\n==========================================================\nGenerated by EcoFinance SL\nGenerated on: 2026-07-26 10:02:33\n==========================================================\n','Generated','2026-07-26 10:02:33'),(3,1,'Sustainability Report','FULL_REPORT','\n==========================================================\n               ECOFINANCE SL\n        ESG SUSTAINABILITY REPORT\n==========================================================\n\nCompany Name\n------------\nABC Holdings (Pvt) Ltd\n\nBusiness Sector\n---------------\nInformation Technology\n\nReporting Period\n----------------\n7/2026\n\nGrid Electricity\n----------------\n0.0 kWh\n\nRenewable Electricity\n---------------------\n0.0 kWh\n\nDiesel\n------\n0.0 L\n\nPetrol\n------\n0.0 L\n\nLPG\n---\n0.0 kg\n\nNatural Gas\n-----------\n0.0 m³\n\nBusiness Travel\n---------------\n0.0 km\n\nEmployee Travel\n---------------\n0.0 km\n\nFreight Transport\n-----------------\n0.0 km\n\nGeneral Waste\n-------------\n0.0 kg\n\nRecycled Waste\n--------------\n0.0 kg\n\nHazardous Waste\n---------------\n0.0 kg\n\n\n==========================================================\nCARBON FOOTPRINT\n==========================================================\n\nScope 1 : 0.00 kg CO₂e\n\nScope 2 : 0.00 kg CO₂e\n\nScope 3 : 0.00 kg CO₂e\n\nTotal Emission : 0.00 kg CO₂e\n\n==========================================================\nENVIRONMENTAL\n==========================================================\n\nScore : 84.0\n\nStatus : Good\n\nRemark :\nGood environmental practices. Continue improving renewable energy and recycling.\n\n\n==========================================================\nSOCIAL\n==========================================================\n\nScore : 77.1\n\nStatus : Good\n\nRemark :\nGood social responsibility practices.\n\n\n==========================================================\nGOVERNANCE\n==========================================================\n\nScore : 100.0\n\nStatus : Excellent\n\nRemark :\nStrong governance and compliance practices.\n\n\n==========================================================\nOVERALL ESG\n==========================================================\n\nOverall Score : 87.03\n\nStatus : Good\n\nRemark :\nOverall ESG performance is Good.\n\n\n==========================================================\nRECOMMENDATIONS\n==========================================================\n\nMaintain your excellent ESG performance.\n\n==========================================================\nGenerated by EcoFinance SL\nGenerated on: 2026-07-26 11:07:47\n==========================================================\n','Generated','2026-07-26 11:07:47');
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT (now()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Sanjaya Madusanka Palihakoon','palihakoon.smp@gmail.com','$2b$12$Qt90FFTzAZ6W8PTUsjvaq.U.SHipqXnvcaUrEofbbB9U6tr7UngaW','2026-07-25 23:18:05');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-26 14:58:48
