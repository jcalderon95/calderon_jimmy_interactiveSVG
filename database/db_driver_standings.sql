-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 02, 2019 at 07:12 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_driver_standings`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_driver`
--

CREATE TABLE `tbl_driver` (
  `ID` int(11) NOT NULL,
  `Name` varchar(70) NOT NULL,
  `Number` varchar(20) NOT NULL,
  `Nationality` varchar(60) NOT NULL,
  `Team` varchar(50) NOT NULL,
  `Points` varchar(20) NOT NULL,
  `Image` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_driver`
--

INSERT INTO `tbl_driver` (`ID`, `Name`, `Number`, `Nationality`, `Team`, `Points`, `Image`) VALUES
(1, 'Lewis Hamilton', '44', 'Great Britain', 'Mercedes', '408', 'mercedes.svg'),
(2, 'Sebastian Vettel', '5', 'Germany', 'Ferrari', '320', 'ferrari.svg'),
(3, 'Kimi Räikkönen', '7', 'Finland', 'Ferrari', '251', 'ferrari.svg'),
(4, 'Max Verstappen', '33', 'Netherlands', 'Red Bull', '249', 'red_bull.svg'),
(5, 'Valtteri Bottas', '77', 'Finland', 'Mercedes', '247', 'mercedes.svg'),
(6, 'Daniel Ricciardo', '3', 'Australia', 'Red Bull', '170', 'red_bull.svg'),
(7, 'Nico Hulkenberg', '27', 'Germany', 'Renault', '69', 'renault.svg'),
(8, 'Sergio Perez', '11', 'Mexico', 'Force India', '62', 'force_india.svg'),
(9, 'Kevin Magnussen', '20', 'Denmark', 'Haas', '56', 'haas.svg'),
(10, 'Carlos Sainz', '55', 'Spain', 'Renault', '53', 'renault.svg'),
(11, 'Fernando Alonso', '14', 'Spain', 'McLaren', '50', 'mclaren.svg'),
(12, 'Esteban Ocon', '31', 'France', 'Force India', '49', 'force_india.svg'),
(13, 'Charles Leclerc', '16', 'Monaco', 'Sauber', '39', 'sauber.svg'),
(14, 'Romain Grosjean', '8', 'France', 'Haas', '37', 'haas.svg'),
(15, 'Pierre Gasly', '10', 'France', 'Toro Rosso', '29', 'toro_rosso.svg'),
(16, 'Stoffel Vandoorne', '2', 'Belgium', 'McLaren', '12', 'mclaren.svg'),
(17, 'Marcus Ericsson', '9', 'Sweden', 'Sauber', '9', 'sauber.svg'),
(18, 'Lance Stroll', '18', 'Canada', 'Williams', '6', 'williams.svg'),
(19, 'Brendon Hartley', '28', 'New Zealand', 'Toro Rosso', '4', 'toro_rosso.svg'),
(20, 'Sergey Sirotkin', '35', 'Russia', 'Williams', '1', 'williams.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_driver`
--
ALTER TABLE `tbl_driver`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_driver`
--
ALTER TABLE `tbl_driver`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
