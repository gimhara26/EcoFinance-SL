-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2026 at 02:36 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecofinance_sl`
--

-- --------------------------------------------------------

--
-- Table structure for table `business_inputs`
--

CREATE TABLE `business_inputs` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `electricity_kwh` decimal(10,2) DEFAULT 0.00,
  `fuel_liters` decimal(10,2) DEFAULT 0.00,
  `transport_distance` decimal(10,2) DEFAULT 0.00,
  `waste_kg` decimal(10,2) DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `business_inputs`
--

INSERT INTO `business_inputs` (`id`, `company_id`, `electricity_kwh`, `fuel_liters`, `transport_distance`, `waste_kg`, `created_at`) VALUES
(1, 1, 1200.00, 350.00, 600.00, 150.00, '2026-07-03 13:14:39'),
(2, 1, 2400.00, 550.00, 1200.00, 300.00, '2026-07-03 20:22:34'),
(3, 2, 1500.00, 400.00, 700.00, 150.00, '2026-07-04 09:20:04'),
(4, 1, 1000.00, 300.00, 540.00, 120.00, '2026-07-04 17:28:06'),
(5, 1, 1200.00, 400.00, 350.00, 60.00, '2026-07-04 17:41:31'),
(6, 1, 1800.00, 850.00, 600.00, 540.00, '2026-07-04 18:42:22'),
(7, 2, 1000.00, 700.00, 600.00, 70.00, '2026-07-15 12:32:48');

-- --------------------------------------------------------

--
-- Table structure for table `carbon_records`
--

CREATE TABLE `carbon_records` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `electricity_kwh` decimal(10,2) DEFAULT 0.00,
  `fuel_liters` decimal(10,2) DEFAULT 0.00,
  `transport_distance` decimal(10,2) DEFAULT 0.00,
  `waste_kg` decimal(10,2) DEFAULT 0.00,
  `total_emission` decimal(10,2) DEFAULT 0.00,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carbon_records`
--

INSERT INTO `carbon_records` (`id`, `company_id`, `electricity_kwh`, `fuel_liters`, `transport_distance`, `waste_kg`, `total_emission`, `created_at`) VALUES
(1, 1, 1200.00, 350.00, 600.00, 150.00, 1518.00, '2026-07-03 13:14:39'),
(2, 1, 2400.00, 550.00, 1200.00, 300.00, 2689.50, '2026-07-03 20:22:34'),
(3, 2, 1500.00, 400.00, 700.00, 150.00, 1783.50, '2026-07-04 09:20:04'),
(4, 1, 1000.00, 300.00, 540.00, 120.00, 1290.40, '2026-07-04 17:28:07'),
(5, 1, 1200.00, 400.00, 350.00, 60.00, 1540.50, '2026-07-04 17:41:31'),
(6, 1, 1800.00, 850.00, 600.00, 540.00, 3106.50, '2026-07-04 18:42:23'),
(7, 2, 1000.00, 700.00, 600.00, 70.00, 2204.50, '2026-07-15 12:32:48');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `business_sector` varchar(150) DEFAULT NULL,
  `registration_no` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `contact_no` varchar(20) DEFAULT NULL,
  `website` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `user_id`, `company_name`, `business_sector`, `registration_no`, `address`, `district`, `province`, `contact_no`, `website`, `created_at`) VALUES
(1, 1, 'Green Lanka Pvt Ltd', 'Food Manufacturing', 'PV12345', '44 Main Street', 'Colombo', 'Western Province', '0715689524', 'www.greenfoods.lk', '2026-07-03 13:10:51'),
(2, 2, 'CBC Company', 'Healthcare', 'PV2345', '20, Borupana Road, Ratmalana', 'Colombo', 'Western Provice', '0768976543', 'www.healthcare.com', '2026-07-04 09:19:17');

-- --------------------------------------------------------

--
-- Table structure for table `esg_inputs`
--

CREATE TABLE `esg_inputs` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `renewable_energy` float DEFAULT NULL,
  `water_consumption` float DEFAULT NULL,
  `recycling_rate` float DEFAULT NULL,
  `environmental_policy` tinyint(1) DEFAULT NULL,
  `employee_satisfaction` float DEFAULT NULL,
  `training_hours` float DEFAULT NULL,
  `gender_diversity` float DEFAULT NULL,
  `community_projects` tinyint(1) DEFAULT NULL,
  `board_meetings` int(11) DEFAULT NULL,
  `ethics_policy` tinyint(1) DEFAULT NULL,
  `compliance` tinyint(1) DEFAULT NULL,
  `risk_management` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `esg_inputs`
--

INSERT INTO `esg_inputs` (`id`, `company_id`, `renewable_energy`, `water_consumption`, `recycling_rate`, `environmental_policy`, `employee_satisfaction`, `training_hours`, `gender_diversity`, `community_projects`, `board_meetings`, `ethics_policy`, `compliance`, `risk_management`, `created_at`) VALUES
(1, 1, 30, 70, 34, 1, 70, 3, 80, 1, 6, 1, 1, 1, '2026-07-04 23:43:09'),
(2, 1, 80, 60, 70, 1, 90, 3, 70, 1, 6, 1, 1, 1, '2026-07-04 23:54:34'),
(3, 1, 40, 60, 30, 1, 90, 3, 70, 1, 6, 1, 1, 1, '2026-07-04 23:57:38'),
(4, 1, 70, 90, 75, 1, 80, 2, 70, 1, 7, 1, 1, 1, '2026-07-05 00:08:38'),
(5, 1, 70, 90, 89, 1, 80, 2, 60, 1, 30, 1, 1, 1, '2026-07-05 00:13:05'),
(6, 1, 70, 70, 80, 1, 79, 2, 70, 1, 5, 1, 1, 1, '2026-07-05 00:29:31'),
(7, 1, 70, 60, 60, 1, 80, 4, 90, 1, 5, 1, 1, 1, '2026-07-15 01:56:18'),
(8, 1, 80, 70, 90, 1, 80, 4, 90, 1, 6, 1, 1, 1, '2026-07-15 16:40:04'),
(9, 1, 90, 80, 78, 1, 80, 4, 90, 1, 6, 1, 1, 1, '2026-07-15 17:29:47'),
(10, 2, 90, 86, 70, 1, 80, 4, 75, 1, 4, 1, 1, 1, '2026-07-15 18:03:24');

-- --------------------------------------------------------

--
-- Table structure for table `esg_scores`
--

CREATE TABLE `esg_scores` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `environmental_score` float NOT NULL,
  `social_score` float NOT NULL,
  `governance_score` float NOT NULL,
  `overall_score` float NOT NULL,
  `environmental_status` varchar(50) DEFAULT NULL,
  `social_status` varchar(50) DEFAULT NULL,
  `governance_status` varchar(50) DEFAULT NULL,
  `overall_status` varchar(50) DEFAULT NULL,
  `environmental_remark` text DEFAULT NULL,
  `social_remark` text DEFAULT NULL,
  `governance_remark` text DEFAULT NULL,
  `overall_remark` text DEFAULT NULL,
  `recommendations` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `esg_scores`
--

INSERT INTO `esg_scores` (`id`, `company_id`, `environmental_score`, `social_score`, `governance_score`, `overall_score`, `environmental_status`, `social_status`, `governance_status`, `overall_status`, `environmental_remark`, `social_remark`, `governance_remark`, `overall_remark`, `recommendations`, `created_at`) VALUES
(1, 1, 80, 77.5, 100, 59.17, 'Critical', 'Good', 'Excellent', 'Poor', 'Environmental impact is very high. Immediate action is recommended.', 'Good social responsibility practices.', 'Strong governance and compliance practices.', 'Overall ESG performance is Poor.', 'Increase renewable energy usage and improve recycling.', '2026-07-04 18:24:34'),
(2, 1, 70, 77.5, 100, 59.17, 'Critical', 'Good', 'Excellent', 'Poor', 'Environmental impact is very high. Immediate action is recommended.', 'Good social responsibility practices.', 'Strong governance and compliance practices.', 'Overall ESG performance is Poor.', 'Increase renewable energy usage and improve recycling.', '2026-07-04 18:27:38'),
(3, 1, 0, 72, 100, 57.33, 'Critical', 'Fair', 'Excellent', 'Poor', 'Environmental impact is very high. Immediate action is recommended.', 'Employee welfare can be improved through training and engagement.', 'Strong governance and compliance practices.', 'Overall ESG performance is Poor.', 'Increase renewable energy usage and improve recycling.\nImprove employee training and community engagement.', '2026-07-04 18:38:38'),
(4, 1, 0, 69, 100, 56.33, 'Critical', 'Fair', 'Excellent', 'Poor', 'Environmental impact is very high. Immediate action is recommended.', 'Employee welfare can be improved through training and engagement.', 'Strong governance and compliance practices.', 'Overall ESG performance is Poor.', 'Increase renewable energy usage and improve recycling.\nImprove employee training and community engagement.', '2026-07-04 18:43:05'),
(5, 1, 40, 71.5, 100, 70.5, 'Poor', 'Fair', 'Excellent', 'Fair', 'Environmental performance requires significant improvement.', 'Employee welfare can be improved through training and engagement.', 'Strong governance and compliance practices.', 'Overall ESG performance is Fair.', 'Increase renewable energy usage and improve recycling.\nImprove employee training and community engagement.', '2026-07-04 18:59:32'),
(6, 1, 40, 79, 100, 73, 'Poor', 'Good', 'Excellent', 'Fair', 'Environmental performance requires significant improvement.', 'Good social responsibility practices.', 'Strong governance and compliance practices.', 'Overall ESG performance is Fair.', 'Increase renewable energy usage and improve recycling.', '2026-07-14 20:26:18'),
(7, 1, 40, 79, 100, 73, 'Poor', 'Good', 'Excellent', 'Fair', 'Environmental performance requires significant improvement.', 'Good social responsibility practices.', 'Strong governance and compliance practices.', 'Overall ESG performance is Fair.', 'Increase renewable energy usage and improve recycling.', '2026-07-15 11:10:04'),
(8, 1, 66.3, 79, 100, 81.77, 'Fair', 'Good', 'Excellent', 'Good', 'Environmental performance is acceptable but needs improvement.', 'Good social responsibility practices.', 'Strong governance and compliance practices.', 'Overall ESG performance is Good.', 'Increase renewable energy usage and improve recycling.', '2026-07-15 11:59:47'),
(9, 2, 80.5, 74.5, 100, 85, 'Good', 'Fair', 'Excellent', 'Good', 'Good environmental practices. Continue improving renewable energy and recycling.', 'Employee welfare can be improved through training and engagement.', 'Strong governance and compliance practices.', 'Overall ESG performance is Good.', 'Improve employee training and community engagement.', '2026-07-15 12:33:24');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `report_title` varchar(200) DEFAULT NULL,
  `report_type` varchar(100) DEFAULT NULL,
  `report_content` longtext DEFAULT NULL,
  `generated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `report_status` varchar(50) DEFAULT 'Generated'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `company_id`, `report_title`, `report_type`, `report_content`, `generated_at`, `report_status`) VALUES
(10, 1, 'Sustainability Report', 'FULL_REPORT', '\n==========================================================\n                       ECOFINANCE SL\n                  SUSTAINABILITY REPORT\n==========================================================\n\nCompany Name\n-------------------\nGreen Lanka Pvt Ltd\n\nBusiness Sector\n----------------------\nFood Manufacturing\n\n==========================================================\nCARBON EMISSION\n==========================================================\n\nElectricity Usage : 1800.0 kWh\n\nFuel Usage        : 850.0 Liters\n\nTransport         : 600.0 km\n\nWaste             : 540.0 kg\n\nTotal Emission    : 3106.50 kg CO₂\n\n\n==========================================================\nENVIRONMENTAL\n==========================================================\n\nScore  : 40.0\n\nStatus : Poor\n\nRemark :\nEnvironmental performance requires significant improvement.\n\n\n\n==========================================================\nSOCIAL\n==========================================================\n\nScore  : 79.0\n\nStatus : Good\n\nRemark :\nGood social responsibility practices.\n\n\n==========================================================\nGOVERNANCE\n==========================================================\n\nScore  : 100.0\n\nStatus : Excellent\n\nRemark :\nStrong governance and compliance practices.\n\n\n==========================================================\nOVERALL ESG\n==========================================================\n\nOverall Score : 73.0\n\nStatus        : Fair\n\nRemark :\nOverall ESG performance is Fair.\n\n\n==========================================================\nRECOMMENDATIONS\n==========================================================\n\nIncrease renewable energy usage and improve recycling.\n\n\n==========================================================\nGenerated by EcoFinance SL\n==========================================================\n', '2026-07-14 21:03:51', 'Generated'),
(11, 1, 'Sustainability Report', 'FULL_REPORT', '\n==========================================================\n                       ECOFINANCE SL\n                  SUSTAINABILITY REPORT\n==========================================================\n\nCompany Name\n-------------------\nGreen Lanka Pvt Ltd\n\nBusiness Sector\n----------------------\nFood Manufacturing\n\n==========================================================\nCARBON EMISSION\n==========================================================\n\nElectricity Usage : 1800.0 kWh\n\nFuel Usage        : 850.0 Liters\n\nTransport         : 600.0 km\n\nWaste             : 540.0 kg\n\nTotal Emission    : 3106.50 kg CO₂\n\n\n==========================================================\nENVIRONMENTAL\n==========================================================\n\nScore  : 40.0\n\nStatus : Poor\n\nRemark :\nEnvironmental performance requires significant improvement.\n\n\n\n==========================================================\nSOCIAL\n==========================================================\n\nScore  : 79.0\n\nStatus : Good\n\nRemark :\nGood social responsibility practices.\n\n\n==========================================================\nGOVERNANCE\n==========================================================\n\nScore  : 100.0\n\nStatus : Excellent\n\nRemark :\nStrong governance and compliance practices.\n\n\n==========================================================\nOVERALL ESG\n==========================================================\n\nOverall Score : 73.0\n\nStatus        : Fair\n\nRemark :\nOverall ESG performance is Fair.\n\n\n==========================================================\nRECOMMENDATIONS\n==========================================================\n\nIncrease renewable energy usage and improve recycling.\n\n\n==========================================================\nGenerated by EcoFinance SL\n==========================================================\n', '2026-07-14 21:30:52', 'Generated'),
(12, 2, 'Sustainability Report', 'FULL_REPORT', '\n==========================================================\n                       ECOFINANCE SL\n                  SUSTAINABILITY REPORT\n==========================================================\n\nCompany Name\n-------------------\nCBC Company\n\nBusiness Sector\n----------------------\nHealthcare\n\n==========================================================\nCARBON EMISSION\n==========================================================\n\nElectricity Usage : 1000.0 kWh\n\nFuel Usage        : 700.0 Liters\n\nTransport         : 600.0 km\n\nWaste             : 70.0 kg\n\nTotal Emission    : 2204.50 kg CO₂\n\n\n==========================================================\nENVIRONMENTAL\n==========================================================\n\nScore  : 80.5\n\nStatus : Good\n\nRemark :\nGood environmental practices. Continue improving renewable energy and recycling.\n\n\n\n==========================================================\nSOCIAL\n==========================================================\n\nScore  : 74.5\n\nStatus : Fair\n\nRemark :\nEmployee welfare can be improved through training and engagement.\n\n\n==========================================================\nGOVERNANCE\n==========================================================\n\nScore  : 100.0\n\nStatus : Excellent\n\nRemark :\nStrong governance and compliance practices.\n\n\n==========================================================\nOVERALL ESG\n==========================================================\n\nOverall Score : 85.0\n\nStatus        : Good\n\nRemark :\nOverall ESG performance is Good.\n\n\n==========================================================\nRECOMMENDATIONS\n==========================================================\n\nImprove employee training and community engagement.\n\n\n==========================================================\nGenerated by EcoFinance SL\n==========================================================\n', '2026-07-15 12:33:55', 'Generated');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `created_at`) VALUES
(1, 'Gimhara Kalpani', 'gimhara@gmail.com', '$2b$12$iRbXdb0K4J0PMUggVme9mug1iSLAYc1FUC.WD2NXGvJt3UR6aULcu', '2026-07-03 13:03:37'),
(2, 'Tharushi Madhurangi', 'tharushi@gmail.com', '$2b$12$CLF6dRBsCsJ2ZEeGVMwFlePprruOvM.3we8GF5758ItJ8MTUECBnK', '2026-07-04 09:15:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business_inputs`
--
ALTER TABLE `business_inputs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `carbon_records`
--
ALTER TABLE `carbon_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_carbon_company` (`company_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_company_user` (`user_id`);

--
-- Indexes for table `esg_inputs`
--
ALTER TABLE `esg_inputs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `esg_scores`
--
ALTER TABLE `esg_scores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_esg_company` (`company_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_report_company` (`company_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_user_email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `business_inputs`
--
ALTER TABLE `business_inputs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `carbon_records`
--
ALTER TABLE `carbon_records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `esg_inputs`
--
ALTER TABLE `esg_inputs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `esg_scores`
--
ALTER TABLE `esg_scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `business_inputs`
--
ALTER TABLE `business_inputs`
  ADD CONSTRAINT `business_inputs_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `carbon_records`
--
ALTER TABLE `carbon_records`
  ADD CONSTRAINT `carbon_records_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `esg_inputs`
--
ALTER TABLE `esg_inputs`
  ADD CONSTRAINT `esg_inputs_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);

--
-- Constraints for table `esg_scores`
--
ALTER TABLE `esg_scores`
  ADD CONSTRAINT `fk_esg_company` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
