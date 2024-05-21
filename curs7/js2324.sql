-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 16, 2024 at 06:27 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `js2324`
--

-- --------------------------------------------------------

--
-- Table structure for table `jsusers`
--

CREATE TABLE `jsusers` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `prenume` varchar(50) NOT NULL,
  `nume` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `datanastere` date NOT NULL,
  `telefon` char(10) NOT NULL,
  `dataadaugare` datetime NOT NULL DEFAULT current_timestamp(),
  `demo` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `jsusers`
--

INSERT INTO `jsusers` (`id`, `prenume`, `nume`, `email`, `datanastere`, `telefon`, `dataadaugare`, `demo`) VALUES
(2, 'Dan', 'Dobrescu', 'dan@test.ro', '2022-05-09', '0754354323', '2022-05-24 10:59:59', 'abc'),
(3, 'Ana', 'Popescu', 'ana@ana.com', '2022-05-11', '0788888434', '2022-05-24 11:01:44', ''),
(4, 'Vali', 'Vasilescu', 'vali@vali.eu', '2022-05-15', '0755553333', '2022-05-24 11:01:44', ''),
(5, 'Adrian editagfh fgh dfgh dfghd ', 'Adiaconitei editat', 'demo1123@example.com', '2024-04-25', '07777777', '2024-04-25 20:35:04', ''),
(9, 'Ion', 'Ionescu', 'ion@demo.com', '2022-05-01', '0723232323', '2022-05-24 10:59:59', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jsusers`
--
ALTER TABLE `jsusers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_unic` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jsusers`
--
ALTER TABLE `jsusers`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
